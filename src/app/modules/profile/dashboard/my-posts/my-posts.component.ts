import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription} from 'rxjs';
import { Router } from '@angular/router';

import { ArticleService } from '../../../core/services/articleService/article.service';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css']
})
export class MyPostsComponent implements OnInit, OnDestroy {

  subscribe : Subscription;
myPosts;
user : string;
  constructor( private articleService: ArticleService, private router: Router) { }
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

  ngOnInit() {
  	this.user = localStorage.getItem('user')
  	this.subscribe = this.articleService.getArticles()
  	.subscribe(data =>{
  		this.myPosts = data.articles;
  		console.log(this.myPosts)
  	})
  }

  ngOnDestroy(){
    if(this.subscribe){
      this.subscribe.unsubscribe();
    }
  }

}

