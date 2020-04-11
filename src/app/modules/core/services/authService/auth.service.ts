import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'

import { newUser} from '../../Models/newuser.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'https://eblog-api.encentrals.com/api';

  constructor(private http : HttpClient) { }

  createUser(userData): Observable<any>{
  	const url = `${this.baseUrl}/users`;
  	return this.http.post(url, userData) 
  }

  login(userData):Observable<any>{
  	const url = `${this.baseUrl}/users/login`;
  	return this.http.post(url, userData)
  }
  
}
