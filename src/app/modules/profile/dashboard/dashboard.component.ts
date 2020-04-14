import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	user;
	isSelected: string;
  constructor() { }

  displayFavsPosts(){
  	this.isSelected = 'favs'
  }

  displayPersonalPosts(){
  	this.isSelected = 'personal';
  }

  ngOnInit() {
  	this.displayPersonalPosts()
  	this.user = localStorage.getItem('user')
  }

}
