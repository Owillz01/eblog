import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyPostsComponent } from './dashboard/my-posts/my-posts.component';
import { FavoritedComponent } from './dashboard/favorited/favorited.component';
import { UsersComponent } from './users/users.component';
import {NgxPaginationModule} from 'ngx-pagination';

// import { SettingsComponent } from './settings/settings/settings.component';



@NgModule({
  declarations: [DashboardComponent, MyPostsComponent, FavoritedComponent, UsersComponent],
  imports: [
    CommonModule,
    NgxPaginationModule
  ]
})
export class ProfileModule { }
