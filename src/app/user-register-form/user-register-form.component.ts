import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';

export function numericValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const isValid = /^[0-9]*$/.test(control.value);
    return isValid ? null : { numeric: { value: control.value } };
  };
}

@Component({
  selector: 'app-user-register-form',
  templateUrl: './user-register-form.component.html',
  styleUrls: ['./user-register-form.component.scss']
})
export class UserRegisterFormComponent {

  userRegistrationForm : FormGroup;
  genderDataSource : any = [
    {genderId:1,genderName:'Male'},
    {genderId:2,genderName:'Female'},
    {genderId:3,genderName:'Others'},
  ]

  constructor(private fb : FormBuilder){
    this.userRegistrationForm = this.fb.group({
      'firstName' : ['',[Validators.required]],
      'lastName':[''],
      'dob':['',[Validators.required]],
      'gender':['',Validators.required],
      'email':['',[Validators.required,Validators.email]],
      'contactNumber':['',[Validators.required,Validators.maxLength(10),Validators.minLength(10),numericValidator()]],
      'address':this.fb.group({
        'street':['',Validators.required],
        'district':['',Validators.required],
        'state':['',Validators.required],
        'country':['',Validators.required],
        'pincode':['',Validators.required],
      }),
      'skills':this.fb.array(['',''])
    });
  }

  get skills(): FormArray {
    return this.userRegistrationForm.get('skills') as FormArray;
  }

  addSkill()
  {
    (this.userRegistrationForm.get('skills') as FormArray).push(this.fb.control(''));
  }

  removeSkill(i : number)
  {
    (this.userRegistrationForm.get('skills') as FormArray).removeAt(i);
  }

  submitUserRegistratrionForm()
  {
    console.log(this.userRegistrationForm.value);
  }

  sampleMethod()
  {
    
  }
}
