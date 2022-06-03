import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, mergeMap } from 'rxjs';
import { QuizzService } from '../quizz.service';
import { fetchQuizzs, QuizzActions, startQuizz } from './quizz.actions';

@Injectable()
export class QuizzEffects {
  fetchQuizzs$ = createEffect(() =>
    this._actions$.pipe(
      ofType(fetchQuizzs),
      mergeMap(() =>
        this._quizzService.getQuizzs().pipe(
          map((quizzs) => ({
            type: QuizzActions.STORE_QUIZZS,
            payload: quizzs,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  startQuizz$ = createEffect(() =>
    this._actions$.pipe(
      ofType(startQuizz),
      mergeMap((action) =>
        this._quizzService.startQuizz(action.id).pipe(
          map((quizz) => ({
            type: QuizzActions.STORE_CURRENT_QUIZZ,
            payload: quizz,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private readonly _actions$: Actions,
    private readonly _quizzService: QuizzService
  ) {}
}
