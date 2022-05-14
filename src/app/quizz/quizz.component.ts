import { Component, OnDestroy, OnInit } from '@angular/core';
import { Quizz } from '../quizz.model';
import { QuizzService } from '../quizz.service';
import { map, Subject, switchMap, takeUntil } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.scss'],
})
export class QuizzComponent implements OnInit, OnDestroy {
  quizz!: Quizz;
  loading = true;

  private readonly _destroy$ = new Subject();

  constructor(
    private readonly _quizzService: QuizzService,
    private readonly _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this._route.paramMap
      .pipe(
        map((params) => params.get('id')),
        switchMap((id) => {
          if (id) {
            return this._quizzService.startQuizz(+id);
          }
          throw new Error("There's no id in route");
        }),
        takeUntil(this._destroy$)
      )
      .subscribe((quizz) => {
        this.quizz = quizz;
        this.loading = false;
      });
  }

  ngOnDestroy() {
    this._destroy$.next(true);
    this._destroy$.complete();
  }
}
