import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppData } from 'src/app/models/story-beat.model';
import { Job } from 'src/app/models/job.model';

@Component({
  selector: 'app-jobs-app',
  templateUrl: './jobs-app.component.html',
  styleUrls: ['./jobs-app.component.scss'],
})
export class JobsAppComponent implements OnInit {
  @Input() appData: AppData;
  @Output() exit: EventEmitter<void> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  apply(job: Job) {
    job.applied = true;
  }
}
