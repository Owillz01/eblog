import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { NewArticle } from '../../core/Models/newArticle.model';
import { ArticleService } from '../../core/services/articleService/article.service';



@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent implements OnInit, OnDestroy {

  constructor( private service : ArticleService, private router : Router) { }

  _subscribe : Subscription;

  newArticle = new FormGroup({
  	title : new FormControl('', Validators.required),
  	description : new FormControl(),
  	tags : new FormControl(),
  	body : new FormControl('', Validators.required),
  })

  createArticle(data: NewArticle){
  	let formatedData = {"article":data}
  	this._subscribe = this.service.createArticle(formatedData)
  	.subscribe(data => {
  		if(data.article.slug){
  			this.router.navigateByUrl('')
  		}
  		console.log(data)

  	})
  }

  ngOnInit() {
  }

  ngOnDestroy(){
  	if(this._subscribe){
  		this._subscribe.unsubscribe()
  	}
  }
}
