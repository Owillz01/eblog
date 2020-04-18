import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewArticleComponent } from './new-article/new-article.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import {ReactiveFormsModule} from '@angular/forms';

import { SharedModule } from '../shared/shared.module'



@NgModule({
  declarations: [NewArticleComponent, EditArticleComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class EditorModule { }
