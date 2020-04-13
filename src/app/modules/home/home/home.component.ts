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

 subscribe : Subscription;
 articles ;
 fav : boolean = true;
feeds : string ='global';
 favArticle(){
 	this.fav = !this.fav;
  }

  globalFeeds(){
    this.feeds = 'global';
  }

  personalFeeds(){
    this.feeds = 'personal';
  }

  ngOnInit() {
  	
  }

  
  
  

}
