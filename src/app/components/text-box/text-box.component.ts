import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TextBox } from '../../models/story-beat.model';
import { of, interval, Observable, Subscription } from 'rxjs';
import { takeUntil, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.scss'],
})
export class TextBoxComponent implements OnInit {
  @Input() data: TextBox;
  @Output() displayEnd: EventEmitter<void> = new EventEmitter();
  textToShow: string = '';
  txtIntSub: Subscription;
  constructor() {}

  get textRolling() {
    return this.data?.body && this.textToShow !== this.data.body;
  }

  ngOnInit(): void {}

  ngOnChanges() {
    this.textToShow = '';
    this._startRoll();
  }

  ffwdText() {
    this.txtIntSub.unsubscribe();
    this.textToShow = this.data.body;
  }

  private _startRoll() {
    if (this.data?.body) {
      const body = this.data.body;
      this.txtIntSub = interval(20)
        .pipe(
          takeWhile((i) => {
            return i < body.length;
          })
        )
        .subscribe({
          next: (i) => {
            this.textToShow = this.textToShow.concat(body[i]);
          },
          complete: () => {},
        });
    }
  }
}
