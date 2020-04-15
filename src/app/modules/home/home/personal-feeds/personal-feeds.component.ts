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

 ex_navToUser(username){
  // this.subscribe = this.authService.getProfileByUsername(username)
  // .subscribe(data =>{
  //   if(data){
  //     this.authService.user = data.profile;
  //     this.router.navigate(['/user', username])
  //   }
  //   console.log(data)
  // })
   //    this.router.navigate(['/user', username])

   // console.log(username)
 }

 navToUser(username){

      this.router.navigate(['/user', username])
      
 }

 navToArticle(slug){

     this.router.navigate(['article', slug])
 }

 // navToArticle(slug){
 //   this.articleService.getArticle(slug)
 //   .subscribe( data => {
 //     this.articleService.article = data;
 //     if (this.articleService.article) {
 //       // code...
 //         this.router.navigateByUrl('article')
 //     }
 //     // console.log(data)
 //   })
 // }
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
