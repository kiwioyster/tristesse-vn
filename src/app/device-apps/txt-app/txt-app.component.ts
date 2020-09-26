import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { AppData } from 'src/app/models/story-beat.model';
import { TextMsg, TextMessenger } from 'src/app/models/text.model';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { SoundService } from 'src/app/sound.service';

@Component({
  selector: 'app-txt-app',
  templateUrl: './txt-app.component.html',
  styleUrls: ['./txt-app.component.scss'],
})
export class TxtAppComponent implements OnInit {
  @Input() messenger: TextMessenger;
  allMsg: TextMsg[] = [];
  online: boolean = false;
  constructor(private sound: SoundService) {}

  ngOnInit(): void {}

  ngOnChanges() {
    if (this.messenger.msg?.length > 0 && this.messenger.on) {
      if (this.messenger.msg[0].newLine) {
        this.allMsg = [];
      }
      this.addTxt(this.messenger.msg);
    }
    try {
      setTimeout(() => {
        const scrollObj = document.getElementsByClassName(
          'drag-scroll-content'
        )[0];
        scrollObj.scrollTop = scrollObj.scrollHeight;
      }, 0);
    } catch (err) {}
  }

  addTxt(msg: TextMsg[]) {
    if (this.allMsg.length > 0 || msg[0]?.sender === 'you') {
      this.sound.playSfx('text-pop', 0.5);
    }
    this.allMsg = this.allMsg.concat(msg);
    this.online = this.allMsg[this.allMsg.length - 1].online;
  }
}
