import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppName } from '../../models/app-name.model';
import { AppData } from 'src/app/models/story-beat.model';

@Component({
  selector: 'app-app-icon',
  templateUrl: './app-icon.component.html',
  styleUrls: ['./app-icon.component.scss'],
})
export class AppIconComponent implements OnInit {
  @Input() app: AppData;
  @Input() isPc: boolean;
  @Output() advStory: EventEmitter<void> = new EventEmitter();
  @Output() openApp: EventEmitter<AppData> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  clickApp(e: AppData) {
    switch (e.name) {
      case AppName.Netbrix:
      case AppName.Scream:
      case AppName.Youpipe:
        break;
      case AppName.Unknown:
      case AppName.TristesseVN:
        this.advStory.emit();
        break;
      default:
        this.openApp.emit(e);
        break;
    }
  }
}
