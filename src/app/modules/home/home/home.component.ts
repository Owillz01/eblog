import { Component, OnInit, OnDestroy } from '@angular/core';
import {  Subscription} from 'rxjs';
import {Router } from '@angular/router'


import { ArticleService } from '../../core/services/articleService/article.service';
// import {Observable, Subscription} from 'rxjs'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor( private articleService : ArticleService, private router : Router) { }

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

  navToArticle(slug){
    this.articleService.getArticle(slug)
    .subscribe( data => {
      this.articleService.article = data;
      if (this.articleService.article) {
        // code...
          this.router.navigateByUrl('article')
      }
      // console.log(data)
    })
  }
  
  ngOnDestroy(){
  	this.subscribe.unsubscribe()
  }

}
