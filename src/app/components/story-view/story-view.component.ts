import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { Story } from '../../story';
import { SoundService } from '../../sound.service';
import { TextBoxComponent } from '../text-box/text-box.component';
import storyData from '../../../story-data';
import { StoryData } from 'src/app/models/story-data.model';
import { PhoneComponent } from '../phone/phone.component';
import { Choice, Device } from 'src/app/models/story-beat.model';

@Component({
  selector: 'app-story-view',
  templateUrl: './story-view.component.html',
  styleUrls: ['./story-view.component.scss'],
})
export class StoryViewComponent implements OnInit {
  @ViewChild(TextBoxComponent) textBox: TextBoxComponent;
  public story: Story;
  ffwdText = false;
  private _cooldown = false;
  loadedImgs: number = 0;
  readonly TOTAL_IMG = 39;
  @ViewChild(PhoneComponent) phone: PhoneComponent;
  constructor(private sound: SoundService) {}

  ngOnInit(): void {
    const audios = [
      new Audio(),
      new Audio(),
      new Audio(),
      new Audio(),
      new Audio(),
      new Audio(),
      new Audio(),
      new Audio(),
    ];
    audios[0].src = 'assets/audio/text-notification.mp3';
    audios[1].src = 'assets/audio/text-pop.mp3';
    audios[2].src = 'assets/audio/door-knock.mp3';
    audios[3].src = 'assets/audio/call-vibe.mp3';
    audios[4].src = 'assets/audio/betterdays.mp3';
    audios[5].src = 'assets/audio/anxiety.mp3';
    audios[6].src = 'assets/audio/main.mp3';
    audios[7].src = 'assets/audio/Tristesse.mp3';
    audios.forEach((a) => (a.oncanplaythrough = this.imgLoaded));
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (
      (event.code === 'Space' || event.code === 'Enter') &&
      !this.story.state?.choice &&
      !this._cooldown
    ) {
      if (this.textBox?.textRolling) {
        this.textBox.ffwdText();
        this._cooldown = true;
        setTimeout(() => {
          this._cooldown = false;
        }, 100);
        return;
      }
      this.story.advStory();
    }
  }
  selectedChoice(choice: Choice) {
    if (choice.id === 'start' || choice.id === 'restart') {
      this.story.restartGame();
      this.story.goToChoice(choice.id);
      return;
    }
    if (this.phone.messengerState?.on && !this.story.cooldown) {
      this.phone.addTextMessage({
        online: true,
        sender: 'you',
        body: choice.text,
      });
      this.story.advStory();
    }
    if (choice.id) {
      this.story.goToChoice(choice.id);
    } else {
      this.story.advStory();
    }
    if (choice.variable) {
      this.story.setVariable(choice.variable);
    }
  }
  imgLoaded = () => {
    this.loadedImgs++;
    if (this.loadedImgs >= this.TOTAL_IMG) {
      this.story = new Story(storyData);
    }
  };
}
