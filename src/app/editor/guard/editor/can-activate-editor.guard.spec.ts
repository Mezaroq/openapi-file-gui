import { TestBed } from '@angular/core/testing';

import { CanActivateEditorGuard } from './can-activate-editor-guard.service';

describe('CanActivateEditorGuard', () => {
  let guard: CanActivateEditorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanActivateEditorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
