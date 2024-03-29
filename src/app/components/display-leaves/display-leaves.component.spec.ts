import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayLeavesComponent } from './display-leaves.component';

describe('DisplayLeavesComponent', () => {
  let component: DisplayLeavesComponent;
  let fixture: ComponentFixture<DisplayLeavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayLeavesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayLeavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
