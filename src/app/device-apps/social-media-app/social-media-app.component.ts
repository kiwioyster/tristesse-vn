import { Component, OnInit, Input } from '@angular/core';
import { AppData } from 'src/app/models/story-beat.model';

@Component({
  selector: 'app-social-media-app',
  templateUrl: './social-media-app.component.html',
  styleUrls: ['./social-media-app.component.scss'],
})
export class SocialMediaAppComponent implements OnInit {
  @Input() appData: AppData;

  constructor() {}

  ngOnInit(): void {}
}
