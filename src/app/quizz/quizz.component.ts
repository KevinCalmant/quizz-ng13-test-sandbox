import { Component } from '@angular/core';
import { Quizz } from '../quizz.model';
import { QuizzService } from '../quizz.service';
import { map, Observable, shareReplay, switchMap, tap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.scss'],
})
export class QuizzComponent {
  quizz$: Observable<Quizz>;
  loading = true;

  constructor(
    private readonly _quizzService: QuizzService,
    private readonly _route: ActivatedRoute
  ) {
    this.quizz$ = this._route.paramMap.pipe(
      map((params) => params.get('id')),
      switchMap((id) => {
        if (id) {
          return this._quizzService.startQuizz(+id);
        }
        throw new Error("There's no id in route");
      }),
      tap(() => (this.loading = false)),
      shareReplay(1)
    );
  }
}
