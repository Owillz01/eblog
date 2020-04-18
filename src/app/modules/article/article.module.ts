import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {NgxPaginationModule} from 'ngx-pagination';

import { ArticleComponent } from './article/article.component';
import { NewcommentComponent } from './newcomment/newcomment.component';
import { CommentsComponent } from './comments/comments.component';

import { SharedModule } from '../shared/shared.module'


@NgModule({
  declarations: [ArticleComponent, NewcommentComponent, CommentsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    SharedModule
  ]
})
export class ArticleModule { }
