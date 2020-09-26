import { TestBed } from '@angular/core/testing';

import { ServerVariableService } from './server-variable.service';

describe('ServerVariableService', () => {
  let service: ServerVariableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerVariableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
