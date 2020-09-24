import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServersDetailsComponent } from './servers-details.component';

describe('ServersDetailsComponent', () => {
  let component: ServersDetailsComponent;
  let fixture: ComponentFixture<ServersDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServersDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
