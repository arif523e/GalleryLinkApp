import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class MyserviceService {

  constructor(private _http: HttpClient) { }

  //Connects with backend logic to resgister the user
  submitRegister(body:any){
    return this._http.post('http://localhost:3000/users/register', body,{
      observe:'body'
    });
  }
  //This is the part that communicates throught the backend to establish the connection with the login
  login(body:any){
    return this._http.post('http://localhost:3000/users/login', body,{
      observe:'body'
    });
  }

  //Comm with backend to get the jwt token
  getUserName() {
    return this._http.get('http://localhost:3000/users/username', {
      observe: 'body',
      params: new HttpParams().append('token', localStorage.getItem('token'))
    });
  }
  

}