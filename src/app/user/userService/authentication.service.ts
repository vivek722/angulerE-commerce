import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { register } from '../register.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  url = 'https://localhost:7172/'; 

  constructor(private http: HttpClient) { }

  UsRegisterdata(user: register)  {
    debugger
    return this.http.post(this.url+'UserAuthentication/register', user);
  }
  UsLogindata(user:any) {
    debugger
    return this.http.post(this.url+'UserAuthentication/Login', user);
  }
  Userislogin():boolean{
    return localStorage.getItem('token')?true:false;
  }
}
