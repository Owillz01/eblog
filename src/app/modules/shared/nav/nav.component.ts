import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

loggedIn;
  constructor() { }
  token = localStorage.getItem('token');

  ngOnInit() {
  	console.log(this.token)
  }

}
