import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCompanyHolidayComponent } from './create-company-holiday.component';

describe('CreateCompanyHolidayComponent', () => {
  let component: CreateCompanyHolidayComponent;
  let fixture: ComponentFixture<CreateCompanyHolidayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCompanyHolidayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCompanyHolidayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
