import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NgxPaginationModule} from 'ngx-pagination';

import { HomeComponent } from './home/home.component';
import { GlobalFeedsComponent } from './home/global-feeds/global-feeds.component';
import { PersonalFeedsComponent } from './home/personal-feeds/personal-feeds.component';
import { TagsComponent } from './home/tags/tags.component';



@NgModule({
  declarations: [HomeComponent, GlobalFeedsComponent, PersonalFeedsComponent, TagsComponent],
  imports: [
    CommonModule,
    NgxPaginationModule
  ]
})
export class HomeModule { }
