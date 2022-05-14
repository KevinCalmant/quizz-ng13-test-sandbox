import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionComponent } from './question.component';
import { AnswerComponent } from '../answer/answer.component';

describe('QuestionComponent', () => {
  const questionMockData = {
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
  };

  let component: QuestionComponent;
  let fixture: ComponentFixture<QuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuestionComponent, AnswerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionComponent);
    component = fixture.componentInstance;
    component.question = questionMockData;
    component.number = questionMockData.id;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show a validation button', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.btn-primary')).toBeTruthy();
  });

  it('should show a formatted title', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').innerText).toEqual(
      `Question n°${
        questionMockData.id
      } : ${questionMockData.title.toLocaleUpperCase()}`
    );
  });

  it('should show a message', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('em').innerText).toEqual(
      questionMockData.message
    );
  });

  it('should show a answer component', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-answer')).toBeTruthy();
  });
});
