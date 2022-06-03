import { createSelector } from '@ngrx/store';
import { selectQuizzState } from '../app.reducer';
import { QuizzState } from './quizz.reducer';

export const selectQuizzs = createSelector(
  selectQuizzState,
  (state: QuizzState) => state.quizzs
);
export const selectCurrentQuizz = createSelector(
  selectQuizzState,
  (state: QuizzState) => state.currentQuizz
);
