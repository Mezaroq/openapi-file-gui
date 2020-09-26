import { TestBed } from '@angular/core/testing';

import { ExternalDocsService } from './external-docs.service';

describe('ExternalDocsService', () => {
  let service: ExternalDocsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExternalDocsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
