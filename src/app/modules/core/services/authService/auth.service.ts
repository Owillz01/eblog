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
  public user;

  public loggedUser: string;

  constructor(private http : HttpClient) { }

  createUser(userData): Observable<any>{
  	const url = `${this.baseUrl}/users`;
  	return this.http.post(url, userData) 
  }

  login(userData):Observable<any>{
  	const url = `${this.baseUrl}/users/login`;
  	return this.http.post(url, userData)
  }

  getCurrentUser():Observable<any>{
    const url = `${this.baseUrl}/user`;
    return this.http.get(url)
  }

  updateCurrentUser(userData):Observable<any>{
    const url = `${this.baseUrl}/user`;
    return this.http.put(url, userData)
  }

  // GET USER'S PROFILE DETAILS

  getProfileByUsername(username) : Observable<any>{
    const url = `${this.baseUrl}/profiles/${username}`;
    return this.http.get(url)
  }

  followUserByUsername(username): Observable<any>{
    const url = `${this.baseUrl}/profiles/${username}/follow`;
    const user = `${this.baseUrl}/profiles/${username}`;
    return this.http.post(url, user)
  }

  unfollowUserByUsername(username){
    const url = `${this.baseUrl}/profiles/${username}/follow`;
    return this.http.delete(url)
  }

  // getToken(){
  //  this.token = localStorage.getItem('token')
  // }
  
}
