import { Answer } from './answer.model';

export interface Question {
  id: number;
  title: string;
  message: string;
  choices: Answer[];
  answer?: Answer;
}
