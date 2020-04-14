import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs'

import { ArticleService } from '../../../core/services/articleService/article.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit, OnDestroy {
	tags;
  constructor( private articleService : ArticleService) { }
  subscribe : Subscription;
  ngOnInit() {
  	this.subscribe = this.articleService.tagsGet()
  	.subscribe(data => {
  		this.tags = data.tags
  		console.log(this.tags)
  	})
  }

  ngOnDestroy(){
  	if(this.subscribe){
  		this.subscribe.unsubscribe()
  	}
  }

}
