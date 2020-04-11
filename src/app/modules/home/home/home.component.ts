import { Component, OnInit, OnDestroy } from '@angular/core';
import { ArticleService } from '../../core/services/articleService/article.service';
import {  Subscription} from 'rxjs'
// import {Observable, Subscription} from 'rxjs'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor( private articleService : ArticleService) { }

 subscribe : Subscription;
 articles ;
 fav : boolean = true;

 favArticle(){
 	this.fav = !this.fav;
  }
  ngOnInit() {
  	this.subscribe = this.articleService.getArticles()
  	.subscribe(_articles =>{
  		this.articles = _articles.articles;
  		console.log(_articles)
  	})
  }

  
  ngOnDestroy(){
  	this.subscribe.unsubscribe()
  }

}
