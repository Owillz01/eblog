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

  navToCreate(){
  	this.router.navigateByUrl('new')
  }

  getToken(){
    this.token = localStorage.getItem('token')
  }
  // navToEdit(){
  // 	this.router.navigateByUrl('edit')
  // }
  logout(){
    localStorage.removeItem('token')
    this.getToken()
    this.router.navigateByUrl('')
  }
  ngOnInit() {
    this.getToken()
  	console.log(this.token)
  }

}
