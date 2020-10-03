import { TestBed } from '@angular/core/testing';

import { CanActivateOperationGuard } from './can-activate-operation.guard';

describe('CanActivateOperationGuard', () => {
  let guard: CanActivateOperationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanActivateOperationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
