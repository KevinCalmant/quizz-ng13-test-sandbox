import { createReducer } from '@ngrx/store';
import { QuizzState, quizzReducer } from './store/quizz.reducer';

export interface AppState {
  quizz: QuizzState;
}

export const appReducer = createReducer({
  quizz: quizzReducer,
});

export const selectQuizzState = (state: AppState) => state.quizz;
