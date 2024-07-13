import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPracticeComponent } from './form-practice.component';

describe('FormPracticeComponent', () => {
  let component: FormPracticeComponent;
  let fixture: ComponentFixture<FormPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPracticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
