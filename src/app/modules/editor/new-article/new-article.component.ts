import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Subscription } from 'rxjs'

import { NewArticle } from '../../core/Models/newArticle.model';
import { ArticleService } from '../../core/services/articleService/article.service';



@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent implements OnInit, OnDestroy {

  constructor( private service : ArticleService) { }

  _subscribe : Subscription;

  newArticle = new FormGroup({
  	title : new FormControl('', Validators.required),
  	description : new FormControl('', Validators.required),
  	tags : new FormControl(),
  	body : new FormControl('', Validators.required),
  })

  createArticle(data: NewArticle){
  	let formatedData = {"article":data}
  	this._subscribe = this.service.createArticle(formatedData)
  	.subscribe(data => {
  		console.log(data)

  	})
  }

  ngOnInit() {
  }

  ngOnDestroy(){
  	this._subscribe.unsubscribe()
  }
}
