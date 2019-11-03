import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent2Component } from './form-component2.component';

describe('FormComponent2Component', () => {
  let component: FormComponent2Component;
  let fixture: ComponentFixture<FormComponent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormComponent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
