import { Component } from '@angular/core';
import { Quizz } from '../quizz.model';
import { map, Observable, shareReplay, switchMap, tap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { startQuizz } from '../store/quizz.actions';
import { selectCurrentQuizz } from '../store/quizz.selector';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.scss'],
})
export class QuizzComponent {
  quizz$: Observable<Quizz | undefined>;
  loading = true;

  constructor(
    private readonly _store: Store<AppState>,
    private readonly _route: ActivatedRoute
  ) {
    this.quizz$ = this._route.paramMap.pipe(
      map((params) => params.get('id')),
      tap((id) => {
        if (id) {
          this._store.dispatch(startQuizz({ id: +id }));
        }
        throw new Error("There's no id in route");
      }),
      switchMap(() => this._store.select(selectCurrentQuizz)),
      tap(() => (this.loading = false)),
      shareReplay(1)
    );
  }
}
