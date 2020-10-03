import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateApiDocsComponent } from './create-api-docs.component';

describe('CreateApiDocsComponent', () => {
  let component: CreateApiDocsComponent;
  let fixture: ComponentFixture<CreateApiDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateApiDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateApiDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
