import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppData } from 'src/app/models/story-beat.model';
import { Email } from 'src/app/models/email.model';

@Component({
  selector: 'app-email-app',
  templateUrl: './email-app.component.html',
  styleUrls: ['./email-app.component.scss'],
})
export class EmailAppComponent implements OnInit {
  @Input() device: 'pc' | 'phone';
  @Input() appData: AppData;
  @Output() exit: EventEmitter<void> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  readEmail(e: Email) {
    e.unread = false;
  }
}
