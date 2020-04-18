import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup} from '@angular/forms'
import {Router, ActivatedRoute} from '@angular/router'


import { ArticleService } from '../../core/services/articleService/article.service'


@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit, OnDestroy {
	oldArticle;
  slug: string;
	editArticle = new FormGroup({
		title : new FormControl(),
		description : new FormControl(),
		body : new FormControl(),
		tags : new FormControl()
	})
	subscribe : Subscription;
  constructor(private articleService : ArticleService, private router : Router, private activeRoute : ActivatedRoute) { }

  updateArticle(data){
    console.log(data)
  	let formatedData = {"article":{
      'title': data.title,
      'description' : data.description,
      'tags' : data.tags,
      'body' : data.body

    }}

    if(formatedData.article.title == null){
      formatedData.article.title = this.oldArticle.article.title
    }
    if(formatedData.article.tags == null){
      formatedData.article.tags = this.oldArticle.article.tags
    }
    if(formatedData.article.body == null){
      formatedData.article.body = this.oldArticle.article.body
    }
    if(formatedData.article.description == null){
      formatedData.article.description = this.oldArticle.article.description
    }
    console.log(formatedData)

  	this.subscribe = this.articleService.updateArticle(this.slug, formatedData)
  	.subscribe(data =>{
  		if(data){
  			this.router.navigateByUrl('')
  			console.log(data)
  		}
  	})
  }

  ngOnInit() {
    this.slug = this.activeRoute.snapshot.params.slug;
    this.subscribe = this.articleService.getArticle(this.slug)
    .subscribe(data => {
      console.log(data)
    	this.oldArticle = data
    })
  	console.log(this.oldArticle)
  }

  ngOnDestroy(){
  	if(this.subscribe){
  		this.subscribe.unsubscribe()
  	}
  }
}
