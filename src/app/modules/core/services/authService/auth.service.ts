import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'

import { newUser} from '../../Models/newuser.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'https://eblog-api.encentrals.com/api';

  public token : string;
  // global token2 : string;

  constructor(private http : HttpClient) { }

  createUser(userData): Observable<any>{
  	const url = `${this.baseUrl}/users`;
  	return this.http.post(url, userData) 
  }

  login(userData):Observable<any>{
  	const url = `${this.baseUrl}/users/login`;
  	return this.http.post(url, userData)
  }

  // getToken(){
  //  this.token = localStorage.getItem('token')
  // }
  
}
