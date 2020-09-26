import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Choice } from '../../models/story-beat.model';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.scss'],
})
export class ChoiceComponent implements OnInit {
  @Input() choices: Choice[];
  @Output() onSelect: EventEmitter<Choice> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  selected(choice: Choice) {
    this.onSelect.emit(choice);
  }
}
