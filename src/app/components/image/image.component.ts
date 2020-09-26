import { Component, OnInit, Input } from '@angular/core';
import { Image } from '../../models/story-beat.model';
import { imageMixin } from '../../mixins/image.mixin';
const ImageMixin = imageMixin();
@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent extends ImageMixin implements OnInit {
  @Input() data: { bg?: Image; fg?: Image };

  bgToShow: string;
  fgToShow: string;
  bgFadeOut = false;
  bgFadeIn = false;
  fgFadeOut = false;
  fgFadeIn = false;
  constructor() {
    super();
  }

  ngOnInit(): void {
    if (this.data?.bg) {
      this.bgToShow = this.data.bg.path;
    }
    if (this.data?.fg) {
      this.fgToShow = this.data.fg.path;
    }
  }

  ngOnChanges() {
    if (this.data?.bg) {
      if (this.data.bg.path === '' && this.data.bg.effects === 'fade') {
        this.fade().subscribe({
          next: (r) => {
            this.bgFadeOut = r.fade;
          },
          complete: () => {
            this.bgToShow = undefined;
          },
        });
      } else if (this.data.bg.effects === 'fade') {
        this.fade().subscribe({
          next: (r) => {
            this.bgFadeIn = r.fade;
            if (this.data.bg) {
              this.bgToShow = this.data.bg.path;
            }
          },
        });
      } else {
        this.bgToShow = this.data.bg.path;
      }
    }
    if (this.data?.fg) {
      if (this.data.fg.path === '' && this.data.fg.effects === 'fade') {
        this.fade().subscribe({
          next: (r) => {
            this.fgFadeOut = r.fade;
          },
          complete: () => {
            this.fgToShow = undefined;
          },
        });
      } else if (this.data.fg.effects === 'fade') {
        this.fade().subscribe({
          next: (r) => {
            this.fgFadeIn = r.fade;
            if (this.data.fg) {
              this.fgToShow = this.data.fg.path;
            }
          },
        });
      } else {
        this.fgToShow = this.data.fg.path;
      }
    }
  }
}
