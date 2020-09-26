import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Story } from '../../story';
import { deviceMixin } from '../../mixins/device.mixin';
import { Device } from '../../models/story-beat.model';
import { TextMessenger, TextMsg } from '../../models/text.model';
import { imageMixin } from '../../mixins/image.mixin';
import { runInThisContext } from 'vm';
import { AppName } from 'src/app/models/app-name.model';
import { TxtAppComponent } from 'src/app/device-apps/txt-app/txt-app.component';

const ImageMixin = imageMixin();
const DeviceMixin = deviceMixin(ImageMixin);

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss'],
})
export class PhoneComponent extends DeviceMixin implements OnInit {
  @Input() story: Story;
  @Input() messenger: TextMessenger;
  @Input() data: Device;
  @ViewChild(TxtAppComponent) textApp: TxtAppComponent;
  starting = true;
  messengerState: TextMessenger;
  dataState: Device;
  constructor() {
    super();
  }

  ngOnInit(): void {}

  ngOnChanges() {
    this.starting = !this.messenger?.on || !this.data?.on;
    if (this.messenger?.on) {
      this.starting = !this.messenger?.on;
      this.dataState = undefined;
      this.messengerState = { ...this.messenger };
    } else if (this.messenger && this.messengerState) {
      this.messengerState.on = this.messenger.on;
    }
    if (this.data?.on) {
      this.starting = !this.data?.on;
      this.dataState = { ...this.data };
      this.messengerState = undefined;
      this.appsData = this.data.apps ? [...this.data.apps] : [];
      if (this.data.openApp) {
        this.openedApp = {
          app: this.data.apps.find((a) => a.name === this.data.openApp),
          device: 'phone',
        };
      }
    } else if (this.data && this.dataState) {
      this.dataState.on = this.data.on;
    }

    if (this.messenger?.time || this.data?.time) {
      if (this.data?.time === 'now' || this.messenger?.time === 'now') {
        const now = new Date();
        let min: any = now.getMinutes();
        let hr: any = now.getHours();
        if (min < 10) {
          min = `0${min}`;
        }
        if (hr < 10) {
          hr = `0${hr}`;
        }
        this.time = `${hr}:${min}`;
      } else {
        this.time = this.messenger?.time || this.data?.time;
      }
    }
  }

  addTextMessage(msg: TextMsg) {
    this.textApp.addTxt([msg]);
  }
}
