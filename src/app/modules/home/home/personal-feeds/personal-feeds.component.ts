import { Component, OnInit, OnDestroy } from '@angular/core';
import {  Subscription} from 'rxjs';
import {Router } from '@angular/router'

import { ArticleService } from '../../../core/services/articleService/article.service';

@Component({
  selector: 'personal-feeds',
  templateUrl: './personal-feeds.component.html',
  styleUrls: ['./personal-feeds.component.css']
})
export class PersonalFeedsComponent implements OnInit, OnDestroy {

  constructor(private articleService : ArticleService, private router : Router) { }
subscribe : Subscription;
 articles ;
 noFeeds : boolean = false;

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
  ngOnInit() {
  	this.subscribe = this.articleService.getArticlesFeed()
  	.subscribe(_articles =>{
  		this.articles = _articles.articles;
  		if(this.articles.length==0){
  			this.noFeeds = true;
  		}
  		console.log(this.articles.length)
  	})
  }

  ngOnDestroy(){
  	this.subscribe.unsubscribe()
  }
}
