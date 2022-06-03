import { createReducer, on } from '@ngrx/store';
import { Quizz } from '../quizz.model';
import { storeCurrentQuizz, storeQuizzs } from './quizz.actions';

export interface QuizzState {
  quizzs: Quizz[];
  currentQuizz: Quizz | undefined;
}

export const initialState: QuizzState = {
  quizzs: [],
  currentQuizz: undefined,
};

export const quizzReducer = createReducer(
  initialState,
  on(storeQuizzs, (state, { quizzs }) => ({ ...state, quizzs })),
  on(storeCurrentQuizz, (state, { currentQuizz }) => ({
    ...state,
    currentQuizz,
  }))
);
