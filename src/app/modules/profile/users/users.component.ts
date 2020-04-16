import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { AuthService } from '../../core/services/authService/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private authService : AuthService, private activeRoute : ActivatedRoute) { }
private user;
private loggedUser;
private followed: boolean;
private subscribe :Subscription;

	unfollowUserByUsername(username){
		this.authService.unfollowUserByUsername(username)
		.subscribe(data => {
			console.log(data)
		})
		this.followed = false;
		console.log(username)

	}

	followUserByUsername(username){
		console.log(username)
		this.authService.followUserByUsername(username)
		.subscribe(data => {
			console.log(data)
		})
		this.followed = true;
	}
  // ngOnInit() {
  // 	this.loggedUser = localStorage.getItem('user')
  // 	this.user = this.authService.user;
  // 	this.followed = this.authService.user.following;

  // 	console.log(this.followed)
  // }

   ngOnInit(){
  	 	this.loggedUser = localStorage.getItem('user')
   		let _user = this.activeRoute.snapshot.params.username;
   		this.subscribe = this.authService.getProfileByUsername(_user)
   		.subscribe(data => {
   			this.user = data.profile;
   			console.log(this.user)
   			this.followed = data.profile.following
   		})
   		   
   }

}
