import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegisterFormComponent } from './user-register-form.component';

describe('UserRegisterFormComponent', () => {
  let component: UserRegisterFormComponent;
  let fixture: ComponentFixture<UserRegisterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRegisterFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
