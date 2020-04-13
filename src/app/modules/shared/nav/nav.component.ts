import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

loggedIn;
  constructor(private router: Router) { }
  token: string;
  user: string;

  navToCreate(){
  	this.router.navigateByUrl('new')
  }

  getUserDetails(){
    this.token = localStorage.getItem('token')
    this.user = localStorage.getItem('user')
  }
  // navToEdit(){
  // 	this.router.navigateByUrl('edit')
  // }
  logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    this.getUserDetails()
    this.router.navigateByUrl('')
  }
  ngOnInit() {
    this.getUserDetails()
  	// console.log(this.token)
  }

}
