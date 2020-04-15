import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute }from '@angular/router';
import { ComServceService } from '../../core/services/comservice/com-servce.service'

@Component({
  selector: 'app-newcomment',
  templateUrl: './newcomment.component.html',
  styleUrls: ['./newcomment.component.css']
})
export class NewcommentComponent implements OnInit {

  constructor( private activeRoute : ActivatedRoute, private commentService : ComServceService) { }

  newComment = new FormGroup({
  	body : new FormControl('', Validators.required)
  })

  createArticleComment(data){
  	let slug = this.activeRoute.snapshot.params.slug;
  	let formatedData = {'comment': data}
  	this.commentService.createArticleComment(slug, formatedData)
  	.subscribe(data => {
  		console.log(data)
  	})
  	// console.log(slug)
  }

  ngOnInit() {
  	
  }

}
