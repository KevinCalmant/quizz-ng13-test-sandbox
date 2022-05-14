import { TestBed } from '@angular/core/testing';

import { QuizzService } from './quizz.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('QuizzService', () => {
  let service: QuizzService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(QuizzService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
