import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent3Component } from './form-component3.component';

describe('FormComponent3Component', () => {
  let component: FormComponent3Component;
  let fixture: ComponentFixture<FormComponent3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormComponent3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
