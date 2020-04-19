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
    this.router.navigate(['article', slug])

  }

// VIEW USER'S DETAILS. naviage to selected user's profile page using Activated Router Snapshot.
//this.router.Snapshot.params.username

  navToUser(username){
       this.router.navigate(['/user', username])
  }

  createArticleFavorite(slug){
  	// this.articles.article.favorited = !this.articles.article.favorited
  	this.subscribe = this.articleService.createArticleFavorite(slug)
  	.subscribe( data => this.router.navigateByUrl(''))
  }

  // DELETE fav
  deleteArticleFavorite(slug){
    // this.router.navigateByUrl('')
  	this.subscribe = this.articleService.deleteArticleFavorite(slug)
  	.subscribe( data => this.router.navigateByUrl(''))
  }

  // getUserDetails(){
  //   this.token = localStorage.getItem('token')
  //   this.user = localStorage.getItem('user')
  //   this.image = localStorage.getItem('image')
  // }
  
   ngOnInit() {
      // this.router.routeReuseStrategy.shouldReuseRoute = () => {return false}
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
