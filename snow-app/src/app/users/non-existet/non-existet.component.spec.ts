import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonExistetComponent } from './non-existet.component';

describe('NonExistetComponent', () => {
  let component: NonExistetComponent;
  let fixture: ComponentFixture<NonExistetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonExistetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonExistetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
