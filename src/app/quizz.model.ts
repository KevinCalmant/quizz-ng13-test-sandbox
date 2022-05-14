import { Question } from './question.model';

export interface Quizz {
  id: number;
  title: string;
  questions?: Question[];
}
