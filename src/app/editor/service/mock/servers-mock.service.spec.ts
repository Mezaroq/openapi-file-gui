import { TestBed } from '@angular/core/testing';

import { ServersMockService } from './servers-mock.service';

describe('ServersMockService', () => {
  let service: ServersMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServersMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
