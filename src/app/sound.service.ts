import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SoundService {
  readonly vol = 0.3;
  constructor() {}

  startBgm(music: HTMLAudioElement, fadeTime?: number) {
    const audio = music;
    const vol = this.vol;
    if (fadeTime) {
      audio.volume = 0;
      audio.play();
      audio.ontimeupdate = function () {
        SoundService.fadeIn(audio, vol, fadeTime);
      };
    } else {
      audio.volume = vol;
      audio.play();
    }
  }

  fadeOutBgm(music: HTMLAudioElement, fadeTime: number) {
    const vol = this.vol;
    const endTime = music.currentTime + fadeTime;
    music.ontimeupdate = function () {
      SoundService.fadeOut(music, endTime, vol, fadeTime);
    };
  }

  playSfx(sound: string, vol: number) {
    const audio = new Audio();
    audio.src = `assets/audio/${sound}.mp3`;
    if (vol >= 0 && vol <= 1) {
      audio.volume = vol;
    } else if (vol !== undefined ) {
      console.error('ERROR - SFX volume must be between 0 to 1, but got ', vol);
    }
    audio.play();
  }

  static fadeOut(
    audio: HTMLAudioElement,
    endTime: number,
    initVolume: number,
    fadeTime: number
  ) {
    if (endTime <= audio.duration) {
      if (
        audio.currentTime >= endTime - fadeTime &&
        audio.currentTime < endTime
      ) {
        if (audio.volume > 0) {
          audio.volume =
            initVolume -
            (initVolume * (audio.currentTime - endTime + fadeTime)) / fadeTime;
        }
      } else if (audio.currentTime >= endTime) {
        audio.pause();
      }
    }
  }

  static fadeIn(
    audio: HTMLAudioElement,
    finalVolume: number,
    fadeTime: number
  ) {
    if (audio.volume < finalVolume && audio.currentTime <= fadeTime) {
      audio.volume = audio.currentTime * (finalVolume / fadeTime);
    }
  }

  private _loopMain() {
    const start = new Audio();
    const mid = new Audio();
    start.src = '../../assets/audio/start.mp3';
    mid.src = '../../assets/audio/mid.mp3';
    mid.load();
    mid.volume = 0.3;
    start.load();
    start.volume = 0.3;
    start.ontimeupdate = function () {
      if (start.currentTime >= start.duration - 0.25 && mid.paused) {
        mid.play();
        mid.ontimeupdate = function () {
          if (mid.currentTime >= mid.duration - 0.3) {
            mid.currentTime = 0;
          }
        };
      }
    };
    start.play();
  }
}
