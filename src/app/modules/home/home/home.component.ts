import { Component, OnInit } from '@angular/core';
import {  Subscription} from 'rxjs';
import {Router } from '@angular/router'


import { ArticleService } from '../../core/services/articleService/article.service';
// import {Observable, Subscription} from 'rxjs'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private articleService : ArticleService, private router : Router) { }
  globalActive: boolean;
  personalActive: boolean;

 subscribe : Subscription;
 articles ;
 fav : boolean = true;
feeds : string ='global';
 favArticle(){
 	this.fav = !this.fav;
  }

  globalFeeds(){
    this.feeds = 'global';
    this.globalActive = true;
    this.personalActive = false;
  }

  personalFeeds(){
    this.feeds = 'personal';
    this.globalActive = false;
    this.personalActive = true;
  }

  ngOnInit() {
      this.router.routeReuseStrategy.shouldReuseRoute = () => {return false}
    
  	this.globalActive = true;
  }

  
  
  

}
