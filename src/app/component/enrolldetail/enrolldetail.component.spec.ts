import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrolldetailComponent } from './enrolldetail.component';

describe('EnrolldetailComponent', () => {
  let component: EnrolldetailComponent;
  let fixture: ComponentFixture<EnrolldetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrolldetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrolldetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
