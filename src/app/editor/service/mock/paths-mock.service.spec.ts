import { TestBed } from '@angular/core/testing';

import { PathsMockService } from './paths-mock.service';

describe('PathsMockService', () => {
  let service: PathsMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PathsMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
