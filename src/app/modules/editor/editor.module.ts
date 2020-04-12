import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewArticleComponent } from './new-article/new-article.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import {ReactiveFormsModule} from '@angular/forms';




@NgModule({
  declarations: [NewArticleComponent, EditArticleComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class EditorModule { }
