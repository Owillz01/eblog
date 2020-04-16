import { Component, OnInit, OnDestroy } from '@angular/core';
import {  Subscription} from 'rxjs';
import {Router } from '@angular/router'

import { ArticleService } from '../../../core/services/articleService/article.service';
import { AuthService } from '../../../core/services/authService/auth.service';

@Component({
  selector: 'global-feeds',
  templateUrl: './global-feeds.component.html',
  styleUrls: ['./global-feeds.component.css']
})
export class GlobalFeedsComponent implements OnInit, OnDestroy {

  constructor(private articleService : ArticleService, private router : Router, 
              private authService : AuthService) { }

 subscribe : Subscription;
  articles ;
  favCount;
  fav;
  p: number = 1;
  favorited : boolean;
  navToArticle(slug){
   // this.subscribe = this.articleService.getArticle(slug)
   //  .subscribe( data => {
   //    this.articleService.article = data;
   //    if (this.articleService.article) {
          this.router.navigate(['article', slug])
    //   }
    // })
  }

// VIEW USER'S DETAILS

  navToUser(username){
       this.router.navigate(['/user', username])
  }

  createArticleFavorite(slug){
  	this.fav= true;
  	console.log(this.fav, 'is selected')
  	this.subscribe = this.articleService.createArticleFavorite(slug)
  	.subscribe( data => console.log(data))
  }

  // DELETE fav
  deleteArticleFavorite(slug){
  	this.fav= false;
  	console.log(this.fav, 'is selected')
  	this.subscribe = this.articleService.deleteArticleFavorite(slug)
  	.subscribe( data => console.log(data))
  }

   ngOnInit() {
   	this.subscribe = this.articleService.getArticles()
   	.subscribe(_articles =>{
   		this.articles = _articles.articles;
   		this.articles.map(article =>{
   			this.favorited = article.favorited;
   			this.favCount = article.favoritesCount;
   		})
   		console.log(_articles)
   	})
   }

 

   ngOnDestroy(){
   	if(this.subscribe){
   		this.subscribe.unsubscribe()
   	}
   }

}
