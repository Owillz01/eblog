import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	user;
  myPost : boolean;
  favorite : boolean;
	isSelected: string;
  constructor() { }

  displayFavsPosts(){
  	this.isSelected = 'favs'
    this.myPost = false;
    this.favorite  = true;
  }

  displayPersonalPosts(){
  	this.isSelected = 'personal';
    this.myPost = true;
    this.favorite  = false;
  }

  ngOnInit() {
  	this.displayPersonalPosts()
    
  	this.user = localStorage.getItem('user')
  }

}
