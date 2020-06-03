import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';
import { MyserviceService } from '../myservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //Creates the login form
  loginForm: FormGroup;
  constructor(private _myservice: MyserviceService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) {
    this.loginForm = new FormGroup({
      //Contains the email/password with no values. It is binded to html through the formGroup section in the html part
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });

  }

  ngOnInit() {
  }

  //Same as register component
  isValid(controlName) {
    return this.loginForm.get(controlName).invalid && this.loginForm.get(controlName).touched;
  };


  login() {
    console.log(this.loginForm.value);
    //Exceutes the login code from the myservice typescript file
    if (this.loginForm.valid) {
      this._myservice.login(this.loginForm.value)
        .subscribe(
          data => {
            // stores the token in local storage 
            // probably not a good idea but I cant figure out how to use cookies)
            localStorage.setItem('token', data.toString());//For some reason, the data HAS to be toString. Not sure why
            this._router.navigate(['/gallery']);
          },
          error => { }
        );
    }
  }
  //litteraly moves to the register page when clicking on register button. Logic for the register button.
  movetoregister() {
    this._router.navigate(['../register'], { relativeTo: this._activatedRoute });
  }
}