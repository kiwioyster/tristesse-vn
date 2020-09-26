import { Component, OnInit, Input } from '@angular/core';
import { imageMixin } from '../../mixins/image.mixin';
import { deviceMixin } from '../../mixins/device.mixin';
import { Story } from '../../story';
import { Device } from '../../models/story-beat.model';
import { AppName } from 'src/app/models/app-name.model';

const ImageMixin = imageMixin();
const DeviceMixin = deviceMixin(ImageMixin);

@Component({
  selector: 'app-pc',
  templateUrl: './pc.component.html',
  styleUrls: ['./pc.component.scss'],
})
export class PcComponent extends DeviceMixin implements OnInit {
  @Input() story: Story;
  @Input() data: Device;
  showPc = false;
  fadingOut = false;
  fadingIn = false;

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.showPc = this.data?.on;
  }

  ngOnChanges() {
    if (this.data?.on) {
      this.appsData = this.data.apps.map((a) => {
        return { ...a };
      });
      if (this.data.openApp) {
        this.openedApp = {
          app: this.data.apps.find((a) => a.name === this.data.openApp),
          device: 'pc',
        };
      }
    }
    if (this.data?.effects === 'fade') {
      if (this.data.on) {
        this.fade().subscribe({
          next: (r) => {
            this.fadingIn = r.fade;
            this.showPc = true;
          },
        });
      } else {
        this.fade().subscribe({
          next: (r) => {
            this.fadingOut = r.fade;
          },
          complete: () => {
            this.showPc = false;
          },
        });
      }
    } else if (this.data) {
      this.showPc = this.data.on;
    }

    if (this.data?.time) {
      if (this.data.time === 'now') {
        const now = new Date();
        this.time = `${now.getHours()}:${now.getMinutes()}`;
      } else {
        this.time = this.data.time;
      }
    }
  }
}
