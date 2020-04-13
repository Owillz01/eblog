import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup} from '@angular/forms'
import {Router} from '@angular/router'


import { ArticleService } from '../../core/services/articleService/article.service'


@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit, OnDestroy {
	oldArticle;
	editArticle = new FormGroup({
		title : new FormControl(),
		description : new FormControl(),
		body : new FormControl(),
		tags : new FormControl()
	})
	subscribe : Subscription;
  constructor(private articleService : ArticleService, private router : Router) { }

  updateArticle(url, data){
  	let formatedData = {"article":data}
  	this.subscribe = this.articleService.updateArticle(url, formatedData)
  	.subscribe(data =>{
  		if(data){
  			this.router.navigateByUrl('')
  			console.log(data)
  		}
  	})
  }

  ngOnInit() {
  	this.oldArticle = [this.articleService.article];
  	console.log(this.articleService.article)
  }

  ngOnDestroy(){
  	if(this.subscribe){
  		this.subscribe.unsubscribe()
  	}
  }
}
