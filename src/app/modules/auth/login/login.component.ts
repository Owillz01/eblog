import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'
import {Router} from '@angular/router';
import { Subscription } from 'rxjs'


import { AuthService } from '../../core/services/authService/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(private router:Router, private service : AuthService) { }

  loginForm = new FormGroup({
  	
  	email : new FormControl(),
  	password : new FormControl()
  })
  _subscribe : Subscription;

  login(data){
    let _user = {'user' : {
      'email': data.email,
      'password' : data.password
    }}
    this._subscribe = this.service.login(_user)
    .subscribe(_resData =>{
      if(_resData.user.token){
        //if the registration was successful, the user is navigated to the login page.
        let token = _resData.user.token;
        let user = _resData.user.username;
        localStorage.setItem('token', token);
        localStorage.setItem('user', user);
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
  ngOnDestroy(){
    if(this._subscribe){
      this._subscribe.unsubscribe()
    }
  }
}



