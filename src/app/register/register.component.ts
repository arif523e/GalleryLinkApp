import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';
import { MyserviceService } from '../myservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatFormFieldModule }  from '@angular/material/form-field';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myForm: FormGroup;
  successMessage: String = '';
  constructor(private _myservice: MyserviceService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) { // from angular router. Allows to click to the login button
    this.myForm = new FormGroup({
      email: new FormControl(null, Validators.email),
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      cnfpass: new FormControl(null, this.passValidator)
    });

    this.myForm.controls.password.valueChanges
      .subscribe(
        x => this.myForm.controls.cnfpass.updateValueAndValidity()
      );
  }

  ngOnInit() {
  }

  isValid(controlName) {
    return this.myForm.get(controlName).invalid && this.myForm.get(controlName).touched;
  }

  passValidator(control: AbstractControl) {
    if (control && (control.value !== null || control.value !== undefined)) {
      const cnfpassValue = control.value;

      const passControl = control.root.get('password');
      if (passControl) {
        const passValue = passControl.value;
        if (passValue !== cnfpassValue || passValue === '') {
          return {
            isError: true
          };
        }
      }
    }
    return null;
  }
  //Creates a log for the user (REMOVE CONSOLE LOG LATER)
  register() {
    console.log(this.myForm.value);

    if (this.myForm.valid) {
      this._myservice.submitRegister(this.myForm.value)
        .subscribe(
          data => this.successMessage = 'Registration Success',
          error => this.successMessage = 'Some error'
        );
    }
  }
  //Logic for login button. Changes the route to login
  movetologin() {
    this._router.navigate(['../login'], { relativeTo: this._activatedRoute });
  }
}