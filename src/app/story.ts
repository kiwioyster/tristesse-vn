import { StoryData } from './models/story-data.model';
import { StoryBeat, Device } from './models/story-beat.model';
import { SoundService } from './sound.service';
import { TextMessenger } from './models/text.model';

export class Story {
  private storyIndex: number = 0;
  private sequenceIndex: number = 0;
  private _storyBeat: StoryBeat;
  private _storyData: StoryData;
  private _end = false;
  private sound = new SoundService();
  private _cooldown = false;
  private _storyVariables: string[] = [];
  private _bgm: HTMLAudioElement = new Audio();
  private _pcState: Device;
  private _phoneState: Device;
  private _messengerState: TextMessenger;
  private _sceneDebugger: string;
  constructor(private story: StoryData, private loadedStoryIndex?: number) {
    if (loadedStoryIndex) {
      this.storyIndex = loadedStoryIndex;
    }
    this._storyData = story;
    this._updateState();
  }

  get state() {
    return this._storyBeat;
  }
  get pcState() {
    return this._pcState;
  }
  get phoneState() {
    return this._phoneState;
  }
  get messengerState() {
    return this._messengerState;
  }

  get storyEnd() {
    return this._end;
  }

  get showIntroBg() {
    return !!this._storyBeat.intro;
  }

  get cooldown() {
    return this._cooldown;
  }

  get sceneDebugger() {
    return this._sceneDebugger;
  }

  restartGame() {
    if (this._end) {
      this._bgm.pause();
      this._bgm = new Audio();
    }
    this._storyVariables = [];
    this._phoneState = undefined;
    this._pcState = undefined;
    this._messengerState = undefined;
    this._end = false;
  }

  advStory() {
    if (this._cooldown) {
      return;
    }

    this._updateState();
  }

  setVariable(v: string) {
    this._storyVariables.push(v);
  }

  hasVariable(v: string): boolean {
    return this._storyVariables.includes(v);
  }

  goToChoice(choice: string) {
    const i = this._storyData.sequences.findIndex((seq, index) => {
      return seq.choicePath === choice;
    });
    if (i > -1) {
      this.sequenceIndex = i;
      this.storyIndex = 0;
      this._updateState();
    }
  }

  private _processAuto() {
    if (this._storyBeat.auto) {
      setTimeout(() => {
        this._cooldown = false;
        this.advStory();
      }, this._storyBeat.auto);
    } else {
      setTimeout(() => {
        this._cooldown = false;
      }, 900);
    }
    this._cooldown = true;
  }

  private _processAudio() {
    if (this._storyBeat.bgm) {
      if (this._storyBeat.bgm.name) {
        if (!this._bgm.src) {
          this._bgm.src = `assets/audio/${this._storyBeat.bgm.name}.mp3`;
          this._bgm.load();
          this._bgm.loop = true;
          this.sound.startBgm(this._bgm, this._storyBeat.bgm.fadeTime);
        } else {
          console.error(
            'Cannot play a new BGM when this old BGM is still in play - ',
            this._bgm
          );
        }
      } else if (this._bgm.src) {
        if (!this._storyBeat.bgm.fadeTime) {
          this._bgm.pause();
          this._bgm = new Audio();
        } else {
          this.sound.fadeOutBgm(this._bgm, this._storyBeat.bgm.fadeTime);
          setTimeout(() => {
            this._bgm = new Audio();
          }, this._storyBeat.bgm.fadeTime * 1000);
        }
      }
    }
    if (this._storyBeat.sfx) {
      this.sound.playSfx(this._storyBeat.sfx.name, this._storyBeat.sfx.volume);
    }
    if (
      this._storyData.sequences[this.sequenceIndex].beats.length ===
      this.storyIndex
    ) {
      this._bgm.src = `assets/audio/Tristesse.mp3`;
      this._bgm.load();
      this.sound.startBgm(this._bgm);
      this._end = true;
    }
  }

  private _updateState() {
    if (!this._end) {
      const newBeat = this._storyData.sequences[this.sequenceIndex].beats[
        this.storyIndex
      ];
      if (newBeat.ifVariable && !this.hasVariable(newBeat.ifVariable)) {
        this.storyIndex++;
        this._updateState();
        return;
      }
      this._storyBeat = newBeat;
      if (this._storyBeat.pc) {
        this._pcState = this._storyBeat.pc;
      }
      if (this._storyBeat.phone) {
        this._phoneState = this._storyBeat.phone;
      }
      if (this._storyBeat.messenger) {
        this._messengerState = this._storyBeat.messenger;
      }
      this.storyIndex++;
      this._processAudio();
      this._processAuto();
    } else {
      this._storyBeat = {
        choice: [
          { id: 'restart', text: 'Retry from where the story branches' },
          { id: 'start', text: 'Restart from the very beginning' },
        ],
      };
    }
    if (this._storyBeat.debugScene) {
      this._sceneDebugger = this._storyBeat.debugScene;
    }
  }
}
