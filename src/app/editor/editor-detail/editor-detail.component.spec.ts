import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorDetailComponent } from './editor-detail.component';

describe('EditorDetailComponent', () => {
  let component: EditorDetailComponent;
  let fixture: ComponentFixture<EditorDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
