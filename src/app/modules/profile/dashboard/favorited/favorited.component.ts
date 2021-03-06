import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription} from 'rxjs';
import { Router } from '@angular/router';


import { ArticleService } from '../../../core/services/articleService/article.service';

@Component({
  selector: 'app-favorited',
  templateUrl: './favorited.component.html',
  styleUrls: ['./favorited.component.css']
})
export class FavoritedComponent implements OnInit, OnDestroy {

subscribe : Subscription;
favorited;
p: number = 1;
  constructor( private articleService: ArticleService,  private router: Router) { }

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

  createArticleFavorite(slug){
    // this.articles.article.favorited = !this.articles.article.favorited
    this.subscribe = this.articleService.createArticleFavorite(slug)
    .subscribe( data => this.router.navigateByUrl('/profile'))
  }

  // DELETE fav
  deleteArticleFavorite(slug){
    // this.router.navigateByUrl('')
    this.subscribe = this.articleService.deleteArticleFavorite(slug)
    .subscribe( data => this.router.navigateByUrl('/profile'))
  }

  ngOnInit() {
  	this.subscribe = this.articleService.getArticles()
  	.subscribe(data =>{
  		this.favorited = data.articles;
  		console.log(this.favorited)
  	})
  }

  ngOnDestroy(){
    if(this.subscribe){
      this.subscribe.unsubscribe();
    }
  }

}
