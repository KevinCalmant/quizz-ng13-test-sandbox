import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerComponent } from './answer.component';

describe('AnswerComponent', () => {
  let component: AnswerComponent;
  let fixture: ComponentFixture<AnswerComponent>;

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
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnswerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerComponent);
    component = fixture.componentInstance;
    component.question = questionMockData;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
