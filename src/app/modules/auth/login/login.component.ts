import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'
import {Router} from '@angular/router';

import { AuthService } from '../../core/services/authService/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private service : AuthService) { }

  loginForm = new FormGroup({
  	
  	email : new FormControl(),
  	password : new FormControl()
  })

  login(data){
    let _user = {'user' : {
      'email': data.email,
      'password' : data.password
    }}
    this.service.login(_user)
    .subscribe(_resData =>{
      if(_resData.user.token){
        //if the registration was successful, the user is navigated to the login page.
        // let {user:{token}} = _data;
        let token = _resData.user.token;
        localStorage.setItem('token', token);
        this.router.navigateByUrl('');
      }
    })
  	console.log(data)
  }

  toSignup(){
  	this.router.navigateByUrl('signup')
  }
  ngOnInit() {
  }

}



