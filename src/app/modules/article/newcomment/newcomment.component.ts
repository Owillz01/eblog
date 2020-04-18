import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router }from '@angular/router';
import { Subscription } from 'rxjs';
import  { comment } from '../../core/Models/comment.model';
import { ComServceService } from '../../core/services/comservice/com-servce.service'

@Component({
  selector: 'app-newcomment',
  templateUrl: './newcomment.component.html',
  styleUrls: ['./newcomment.component.css']
})
export class NewcommentComponent implements OnInit, OnDestroy {

  constructor( private activeRoute : ActivatedRoute, private commentService : ComServceService, private router : Router) { }
  subscribe : Subscription
  newComment = new FormGroup({
  	body : new FormControl('', Validators.required)
  })

  createArticleComment(data: comment){
  	let slug = this.activeRoute.snapshot.params.slug;
  	let formatedData = {'comment': data}
  	this.subscribe = this.commentService.createArticleComment(slug, formatedData)
  	.subscribe(data => {
      this.router.navigate(['article', slug])
  		console.log(data)
      
  	})
  	// console.log(slug)
  }
  navToArticle(slug){
     this.router.navigate(['article', slug])
  }
  ngOnInit() {
  	
  }
  ngOnDestroy(){
    if(this.subscribe){
      this.subscribe.unsubscribe()
    }
  }
}
