import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveCountersComponent } from './leave-counters.component';

describe('LeaveCountersComponent', () => {
  let component: LeaveCountersComponent;
  let fixture: ComponentFixture<LeaveCountersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveCountersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveCountersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
