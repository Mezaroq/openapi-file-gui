import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenApiDocsComponent } from './open-api-docs.component';

describe('OpenApiDocsComponent', () => {
  let component: OpenApiDocsComponent;
  let fixture: ComponentFixture<OpenApiDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenApiDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenApiDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
