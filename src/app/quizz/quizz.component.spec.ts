import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzComponent } from './quizz.component';
import { QuizzService } from '../quizz.service';
import { delay, of, take } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { QuestionComponent } from '../question/question.component';
import { AnswerComponent } from '../answer/answer.component';

describe('QuizzComponent', () => {
  let component: QuizzComponent;
  let fixture: ComponentFixture<QuizzComponent>;
  const mockQuizzService = jasmine.createSpyObj<QuizzService>('QuizzService', [
    'startQuizz',
  ]);
  const mockQuizzData = of({
    id: 1,
    title: 'Dummy quizz',
    questions: [
      {
        id: 1,
        title: 'To be or not to be ?',
        message: 'Only one choice possible',
        choices: [
          {
            id: 1,
            label: 'to be',
            isExact: true,
          },
          {
            id: 2,
            label: 'not to be',
            isExact: false,
          },
        ],
      },
      {
        id: 2,
        title: 'Does the yes need the no the win against the no ?',
        message: 'Only one choice possible',
        choices: [
          {
            id: 3,
            label: 'yes',
            isExact: true,
          },
          {
            id: 4,
            label: 'no',
            isExact: false,
          },
        ],
      },
    ],
  }).pipe(delay(200));

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [QuizzComponent, QuestionComponent, AnswerComponent],
      providers: [
        { provide: QuizzService, useValue: mockQuizzService },
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({
              get: (string: string) => 1,
            }),
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    mockQuizzService.startQuizz.withArgs(1).and.returnValue(mockQuizzData);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show loading message before quizz data coming', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div[role="alert"]').innerText).toEqual(
      'Chargement...'
    );
  });

  it('should show quizz title', (done) => {
    const compiled = fixture.debugElement.nativeElement;
    mockQuizzData.pipe(take(1)).subscribe((quizz) => {
      fixture.detectChanges();
      expect(
        compiled.querySelector('h1[aria-label="quizz-title"]').innerText
      ).toEqual(quizz.title);
      done();
    });
  });

  it('should have the same amount of question component as mocked data', (done) => {
    const compiled = fixture.debugElement.nativeElement;
    mockQuizzData.pipe(take(1)).subscribe((quizz) => {
      fixture.detectChanges();
      expect([...compiled.querySelectorAll('app-question')].length).toEqual(
        quizz.questions.length
      );
      done();
    });
  });
});
