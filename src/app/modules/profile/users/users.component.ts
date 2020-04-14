import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../core/services/authService/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private authService : AuthService) { }
private user;
private loggedUser;
private followed: boolean;

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
  ngOnInit() {
  	this.loggedUser = localStorage.getItem('user')
  	this.user = this.authService.user;
  	this.followed = this.authService.user.following;

  	console.log(this.followed)
  }

}
