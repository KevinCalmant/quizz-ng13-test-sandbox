import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../question.model';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css'],
})
export class AnswerComponent {
  @Input() question!: Question;

  selected: number | undefined;
}
