import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-practice',
  templateUrl: './form-practice.component.html',
  styleUrls: ['./form-practice.component.scss']
})
export class FormPracticeComponent {

  peopleForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.peopleForm = this.fb.group({
      'people': this.fb.array([this.createPerson()])
    })
  }

  createPerson(): FormGroup {
    return this.fb.group({
      'name': ['', [Validators.required]],
      'email': ['', [Validators.required, Validators.email]],
      'gender': [''],
      'hobbies': this.fb.array([''])
    });
  }

  getPeople(): FormArray {
    return this.peopleForm.get('people') as FormArray;
  }

  addPerson() {
    this.getPeople().push(this.createPerson());
  }

  reomvePerson(personIndex: number) {
    this.getPeople().removeAt(personIndex);
  }

  getHobbies(personIndex: number): FormArray {
    return this.getPeople().at(personIndex).get('hobbies') as FormArray;
  }

  addHobby(personIndex: number) {
    //(this.getPeople().at(personIndex).get('hobbies') as FormArray).push(this.fb.control(''));
    //or
    this.getHobbies(personIndex).push(this.fb.control(''));
  }

  removeHobby(personIndex: number, hobbyIndex: number) {
    this.getHobbies(personIndex).removeAt(hobbyIndex);
  }

  savePeople() {
    console.log(this.peopleForm.value);
  }

  checkForNameFieldError(personIndex: number): boolean {
    if (this.getPeople().at(personIndex).get('name')?.touched && this.getPeople().at(personIndex).get('name')?.invalid) {
      return true;
    }
    return false;
  }

  checkForEmailFieldError(personIndex: number): boolean {
    if (this.getPeople().at(personIndex).get('email')?.touched && this.getPeople().at(personIndex).get('email')?.invalid) {
      return true;
    }
    return false;
  }

  checkForEmailFieldMandatoryError(personIndex: number): boolean {
    if(this.getPeople().at(personIndex).get('email')?.hasError('required'))
    {
      return true;
    }
    return false;
  }

  checkForEmailFieldFormatError(personIndex: number): boolean {
    if(this.getPeople().at(personIndex).get('email')?.hasError('email'))
      {
        return true;
      }
    return false;
  }
}
