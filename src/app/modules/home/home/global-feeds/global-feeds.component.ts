import { Component, OnInit, OnDestroy } from '@angular/core';
import {  Subscription} from 'rxjs';
import {Router } from '@angular/router'

import { ArticleService } from '../../../core/services/articleService/article.service';

@Component({
  selector: 'global-feeds',
  templateUrl: './global-feeds.component.html',
  styleUrls: ['./global-feeds.component.css']
})
export class GlobalFeedsComponent implements OnInit, OnDestroy {

  constructor(private articleService : ArticleService, private router : Router) { }

 subscribe : Subscription;
  articles ;

  navToArticle(slug){
   this.subscribe = this.articleService.getArticle(slug)
    .subscribe( data => {
      this.articleService.article = data;
      if (this.articleService.article) {
        // code...
          this.router.navigateByUrl('article')
      }
      // console.log(data)
    })
  }

  favorited(count){

  }

  createArticleFavorite(slug){

  	this.subscribe = this.articleService.createArticleFavorite(slug)
  	.subscribe( data => console.log(data))
  }
   ngOnInit() {
   	this.subscribe = this.articleService.getArticles()
   	.subscribe(_articles =>{
   		this.articles = _articles.articles;
   		console.log(_articles)
   	})
   }



   ngOnDestroy(){
   	if(this.subscribe){
   		this.subscribe.unsubscribe()
   	}
   }

}
