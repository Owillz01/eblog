import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	user;
  image : string;
  myPost : boolean;
  favorite : boolean;
	isSelected: string;
  constructor(private router : Router) { }

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
      this.router.routeReuseStrategy.shouldReuseRoute = () => {return false}
    
    this.user = localStorage.getItem('user')
  	this.image = localStorage.getItem('image')
  }

}
