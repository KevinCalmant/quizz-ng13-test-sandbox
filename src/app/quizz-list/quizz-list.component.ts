import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { fetchQuizzs } from '../store/quizz.actions';
import { selectQuizzs } from '../store/quizz.selector';

@Component({
  selector: 'app-quizz-list',
  templateUrl: './quizz-list.component.html',
  styleUrls: ['./quizz-list.component.scss'],
})
export class QuizzListComponent implements OnInit {
  loading = true;

  quizzs$ = this._store.select(selectQuizzs);

  constructor(private readonly _store: Store<AppState>) {}

  ngOnInit(): void {
      this._store.dispatch(fetchQuizzs());
  }
}
