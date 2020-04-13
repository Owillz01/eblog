import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { GlobalFeedsComponent } from './home/global-feeds/global-feeds.component';
import { PersonalFeedsComponent } from './home/personal-feeds/personal-feeds.component';



@NgModule({
  declarations: [HomeComponent, GlobalFeedsComponent, PersonalFeedsComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
