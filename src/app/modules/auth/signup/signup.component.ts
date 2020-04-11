import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {Observable} from 'rxjs'
import {FormGroup, FormControl, Validators} from '@angular/forms';
// import {HttpClient}

import { AuthService } from '../../core/services/authService/auth.service';
import { newUser } from '../../core/Models/newuser.model'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router : Router, private authService : AuthService) { }

  signupForm = new FormGroup({
  	userName : new FormControl('', Validators.required),
  	email : new FormControl('',  Validators.required),
  	password : new FormControl('', Validators.required)
  })
 
  signUp(data: newUser){
  	let _user = {'user' : {
  		'username' : data.userName,
  		'email': data.email,
  		'password' : data.password
  	}}



//TODO>>>> ADD A TOAST TO INDICATE TO THE USER THAT THE REGITRATION WAS SUCCESSFUL. 
  	this.authService.createUser(_user)
  	.subscribe( _resData => {
  		// localStorage.setItem('token')
  		if(_resData.user.token){
  			//if the registration was successful, the user is navigated to the login page.
  			// let {user:{token}} = _data;
  			// let token = _data.user.token;
  			// localStorage.setItem('token', token);
  			this.navToLogin();
  		}
  		console.log(_resData)
  	})

  	console.log('api call made')
  }
  navToLogin(){
  	this.router.navigateByUrl('signin')
  }
  ngOnInit() {
  }

}
