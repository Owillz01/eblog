import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs'

import { ComServceService } from '../../core/services/comservice/com-servce.service';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit, OnDestroy {
	comments;
	user;
	followed : boolean;
	subscribe : Subscription;
	slug : string; 
	 p: number = 1;
  constructor(private router : Router, private commentService : ComServceService, private activeRoute : ActivatedRoute ) { 
     
  }

  navToUser(username){
       this.router.navigate(['/user', username])
  }

  deleteArticleComment(id){
  	this.commentService.deleteArticleComment(this.slug, id)
  	.subscribe(data => {
  		console.log(data)
       this.router.navigate(['article', this.slug])
       
  	})
  }

  ngOnInit() {
  	this.slug = this.activeRoute.snapshot.params.slug;
  	this.user = localStorage.getItem('user')
  	this.commentService.getArticleComments(this.slug)
  	.subscribe(data =>{
  		this.comments = data.comments;
  		this.comments.map(comment =>{
	  		this.followed = comment.author.following;

  		})
      this.router.routeReuseStrategy.shouldReuseRoute = () => {return false}
	  	console.log('this slug is >>', this.comments)
  	})
  }

  ngOnDestroy(){
  	if(this.subscribe){
  		this.subscribe.unsubscribe();
  	}
  }

}
