import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollTableComponent } from './enroll-table.component';

describe('EnrollTableComponent', () => {
  let component: EnrollTableComponent;
  let fixture: ComponentFixture<EnrollTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrollTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
