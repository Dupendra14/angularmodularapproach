import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  panelOpenState = false;
  step = 0;
  count = 0;
  states: string[] = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];
  registration: FormGroup;
  form: any[] = [];
  arr: FormArray;

  constructor(private fb: FormBuilder) {
    // this.registration = fb.group({
    //   name: [''],
    //   age: [''],
    //   gender: [''],
    //   state: [],
    //   tnd: ['']
    // });
  }

  ngOnInit() {
    this.registration = this.fb.group({
      arr: this.fb.array([this.createItem()])
    })
  }

  createItem() {
    return this.fb.group({
      name: [''],
      age: [''],
      gender: [''],
      state: [],
      tnd: ['']
    })
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  addForm() {
      this.form.push(this.count += 1);
      this.arr = this.registration.get('arr') as FormArray;
    this.arr.push(this.createItem());
  }

  saveAllForm() {
    if(this.registration.valid) {
      console.log(this.registration.value);
    }
  }

}
