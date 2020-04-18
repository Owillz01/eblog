import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import {Router, ActivatedRoute} from '@angular/router'

import { ArticleService } from '../../core/services/articleService/article.service'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit, OnDestroy {

  constructor(private articleService : ArticleService, private router : Router, private activeRoute : ActivatedRoute) { }
  article;
  subscribe : Subscription;
  isLogged:boolean = false;
  slug : string;
  favorited : boolean;
  favCount : number;
  editArticle(){
  	// this.articleService.getArticle()
  	this.router.navigate(['edit',this.slug])
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

  createArticleFavorite(slug){
    this.subscribe = this.articleService.createArticleFavorite(slug)
    .subscribe( data => {
      this.favorited = true;
      this.favCount++
    })
  }

  // DELETE fav
  deleteArticleFavorite(slug){
    this.subscribe = this.articleService.deleteArticleFavorite(slug)
    .subscribe( data =>{
      this.favorited = false;
      this.favCount--
    })
  }

  navToUser(username){
       this.router.navigate(['/user', username])
  }

  ngOnInit(){
    let user = localStorage.getItem('user');
    this.slug = this.activeRoute.snapshot.params.slug
    this.subscribe = this.articleService.getArticle(this.slug)
    .subscribe(data =>{

      this.article = [data];
      // console.log('this is the article', this.article)
      this.article.map(data =>{
          this.favCount = data.article.favoritesCount;
             if(user == data.article.author.username){
               console.log('user logged is', this.isLogged)
               this.isLogged = true;
             }

             if(data.article.favorited){
               this.favorited = true;
             }
           })
      // console.log('this is the article', this.article)
    })
  }
	
  ngOnDestroy(){
  	if(this.subscribe){
  		this.subscribe.unsubscribe()
  	}
  }
}
