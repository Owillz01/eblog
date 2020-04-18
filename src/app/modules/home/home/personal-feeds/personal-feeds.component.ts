import { Component, OnInit, OnDestroy } from '@angular/core';
import {  Subscription} from 'rxjs';
import {Router } from '@angular/router'

import { ArticleService } from '../../../core/services/articleService/article.service';
import { AuthService } from '../../../core/services/authService/auth.service';


@Component({
  selector: 'personal-feeds',
  templateUrl: './personal-feeds.component.html',
  styleUrls: ['./personal-feeds.component.css']
})
export class PersonalFeedsComponent implements OnInit, OnDestroy {

  constructor(private articleService : ArticleService, private router : Router, private authService : AuthService) { }
subscribe : Subscription;
 articles ;
 noFeeds : boolean = false;
  p: number = 1;

 navToUser(username){
      this.router.navigate(['/user', username])
 }

 navToArticle(slug){

     this.router.navigate(['article', slug])
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

  ngOnInit() {
  	this.subscribe = this.articleService.getArticlesFeed()
  	.subscribe(_articles =>{
  		this.articles = _articles.articles;
  		if(this.articles.length <= 0){
  			this.noFeeds = true;
  		}
  		console.log(this.articles.length)
  	})
  }

  ngOnDestroy(){
  	if(this.subscribe){
      this.subscribe.unsubscribe()
    }
  }
}
