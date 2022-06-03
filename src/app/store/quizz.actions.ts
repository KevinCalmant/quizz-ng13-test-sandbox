import { createAction, props } from '@ngrx/store';
import { Quizz } from '../quizz.model';

export enum QuizzActions {
  FETCH_QUIZZS = '[Quizz] Fetch',
  STORE_QUIZZS = '[Quizz] Store',
  START_QUIZZ = '[Quizz] Start',
  STORE_CURRENT_QUIZZ = '[Quizz] Store Current Quizz',
}

export const fetchQuizzs = createAction(QuizzActions.FETCH_QUIZZS);
export const storeQuizzs = createAction(
  QuizzActions.STORE_QUIZZS,
  props<{ quizzs: Quizz[] }>()
);
export const startQuizz = createAction(
  QuizzActions.START_QUIZZ,
  props<{ id: number }>()
);
export const storeCurrentQuizz = createAction(
  QuizzActions.STORE_CURRENT_QUIZZ,
  props<{ currentQuizz: Quizz }>()
);

export type QuizzActionUnion =
  | QuizzActions.FETCH_QUIZZS
  | QuizzActions.STORE_QUIZZS
  | QuizzActions.START_QUIZZ
  | QuizzActions.STORE_CURRENT_QUIZZ;
