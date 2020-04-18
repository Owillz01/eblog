import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UpdateUser } from '../core/Models/UpdateUser.model';

import { AuthService } from '../core/services/authService/auth.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit, OnDestroy {

	settingsForm = new FormGroup({
		image : new FormControl(),
		username : new FormControl(),
		bio : new FormControl(),
		email : new FormControl('', Validators.required),
		password : new FormControl('', Validators.required),
		
	})
	formatedData;
	oldDetails;
	loading : boolean;
	subscribe : Subscription;
  constructor( private authService : AuthService, private router : Router) { }

	update(data: UpdateUser){
		
		console.log(data)
	
		let formatedData = {'user': {
			'username' : data.username,
			'bio' : data.bio,
			'email' : data.email,
			'password' : data.password,
			'image' : data.image
		}} 
		if(formatedData.user.username == null){
			formatedData.user.username = this.oldDetails.username
		}

		if(formatedData.user.bio == null){
			formatedData.user.bio = this.oldDetails.bio
		}

		if(formatedData.user.email == ""){
			formatedData.user.email = this.oldDetails.email
		}
		if(formatedData.user.password == ""){
			formatedData.user.password = this.oldDetails.password
		}
		if(formatedData.user.image == null){
			formatedData.user.image = this.oldDetails.image
		}

		console.log(formatedData)
		this.subscribe = this.authService.updateCurrentUser(formatedData)
		.subscribe(data =>{
			if(data.user.token){
				this.router.navigateByUrl('signin')
				localStorage.removeItem('token');
			}
			console.log(data)
		})
	}

	logout(){
	  localStorage.removeItem('token')
	  localStorage.removeItem('user')
	  this.router.navigateByUrl('')
	}

  ngOnInit() {
  	this.loading = true;
  	this.subscribe = this.authService.getCurrentUser()
  	.subscribe(data =>{
  		console.log(data)
  		this.oldDetails =data.user;
  		// console.log('old user', this.oldDetails)
  		console.log('first loadiing state', this.loading)
  		this.loading = false;
  		console.log('second loadiing state', this.loading)


  	})
  }

  ngOnDestroy(){
  	if(this.subscribe){
  		this.subscribe.unsubscribe();
  	}
  }
}
