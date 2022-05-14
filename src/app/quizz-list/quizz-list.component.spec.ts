import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzListComponent } from './quizz-list.component';
import { QuizzService } from '../quizz.service';
import { delay, of, Subject, take, tap } from 'rxjs';
import { Quizz } from '../quizz.model';
import { RouterTestingModule } from '@angular/router/testing';
import { QuizzComponent } from '../quizz/quizz.component';
import { QuestionComponent } from '../question/question.component';
import { AnswerComponent } from '../answer/answer.component';

describe('QuizzListComponent', () => {
  let component: QuizzListComponent;
  let fixture: ComponentFixture<QuizzListComponent>;
  const mockQuizzService = jasmine.createSpyObj<QuizzService>('QuizzService', {
    getQuizzs: of([
      {
        id: 1,
        title: 'toto',
      },
    ]).pipe(
      delay(200),
      tap((quizzs) => checkList$.next(quizzs))
    ),
  });

  const checkList$ = new Subject<Quizz[]>();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        QuizzListComponent,
        QuizzComponent,
        QuestionComponent,
        AnswerComponent,
      ],
      providers: [{ provide: QuizzService, useValue: mockQuizzService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizzListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show loading before quizz data has arrived', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div[role="alert"]')).toBeTruthy();
    expect(compiled.querySelector('div[role="alert"]').innerText).toContain(
      'Chargement...'
    );
  });

  it('should show quizz list as data has arrived', (done) => {
    const compiled = fixture.debugElement.nativeElement;
    mockQuizzService
      .getQuizzs()
      .pipe(take(1))
      .subscribe((quizzs: Quizz[]) => {
        fixture.detectChanges();
        quizzs.forEach((quizz) => {
          const quizzLine = compiled.querySelector(
            `a[role="button"][aria-label="${quizz.id} - ${quizz.title}"]`
          );
          expect(quizzLine).toBeTruthy();
          expect(quizzLine.innerText).toContain(quizz.title);
          expect(quizzLine.getAttribute('href')).toBe(`/quizz/${quizz.id}`);
          done();
        });
      });
  });
});
