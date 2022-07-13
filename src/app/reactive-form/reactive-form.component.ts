import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 
  myFormSignIn= new FormGroup({
    fName: new FormControl('',Validators.required),
    lName: new FormControl('',Validators.required),
    nEmail: new FormControl('')
  });

  SentFormData(uData:any){

  }
}