import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import {Router} from '@angular/router'

import { ArticleService } from '../../core/services/articleService/article.service'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit, OnDestroy {

  constructor(private articleService : ArticleService, private router : Router) { }
  article;
  subscribe : Subscription;
  isLogged:boolean = false;

 
  // getArticle(slug){
  // 	this.subscribe = this.articleService.getArticle(slug)
  // 	.subscribe( data => {
  // 			this.article = data.article;
  // 			console.log(this.article)
  // 	})
  // }

  editArticle(){
  	// this.articleService.getArticle()
  	this.router.navigateByUrl('edit')
  }

  deleteArticle(slug){
  	this.subscribe = this.articleService.deleteArticle(slug)
  	.subscribe( data => {
  		if(data){
  			this.router.navigateByUrl('')
  		}
  		console.log(data)
  	})
  }

  navToEdit(){
  	this.router.navigateByUrl('edit')
  }
   ngOnInit() {
   	this.article = [this.articleService.article]
   	let user = localStorage.getItem('user')
   	// if(token == this.article.)
   	this.article.forEach(data =>{
   		if(user == data.article.author.username){
   			this.isLogged = true;
   		}
   	})
   	
  }
	
  ngOnDestroy(){
  	if(this.subscribe){
  		this.subscribe.unsubscribe()
  	}
  }
}
