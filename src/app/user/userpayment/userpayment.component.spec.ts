import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserpaymentComponent } from './userpayment.component';

describe('UserpaymentComponent', () => {
  let component: UserpaymentComponent;
  let fixture: ComponentFixture<UserpaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserpaymentComponent]
    });
    fixture = TestBed.createComponent(UserpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
