import { Component } from '@angular/core';
import { QuizzService } from '../quizz.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-quizz-list',
  templateUrl: './quizz-list.component.html',
  styleUrls: ['./quizz-list.component.scss'],
})
export class QuizzListComponent {
  loading = true;

  quizzs$ = this._quizzService
    .getQuizzs()
    .pipe(tap(() => (this.loading = false)));

  constructor(private readonly _quizzService: QuizzService) {}
}
