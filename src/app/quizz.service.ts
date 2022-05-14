import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { Quizz } from './quizz.model';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class QuizzService {
  constructor(private readonly _httpClient: HttpClient) {}

  public getQuizzs(): Observable<Quizz[]> {
    return this._httpClient.get<Quizz[]>(`${environment.apiurl}/quizz`).pipe(
      catchError((err) => {
        console.error(
          'Erreur lors de la récupération de la listes des quizzs',
          err
        );
        throw err;
      })
    );
  }

  public startQuizz(id: number): Observable<Quizz> {
    return this._httpClient
      .get<Quizz>(`${environment.apiurl}/quizz/${id}`)
      .pipe(
        // Si une exception est levée
        catchError((err) => {
          console.log('Erreur lors de la récupération du Quizz', err);
          throw err;
        })
      );
  }
}
