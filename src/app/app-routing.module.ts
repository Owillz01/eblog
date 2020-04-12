import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent} from './modules/home/home/home.component';
import { LoginComponent} from './modules/auth/login/login.component';
import { SignupComponent} from './modules/auth/signup/signup.component';
import { DashboardComponent } from './modules/profile/dashboard/dashboard.component'
import {NewArticleComponent } from './modules/editor/new-article/new-article.component'
import {EditArticleComponent } from './modules/editor/edit-article/edit-article.component'

const routes: Routes = [
	{path: '', component : HomeComponent},
	{path: 'signup', component : SignupComponent},
	{path: 'signin', component : LoginComponent},
	{path: 'new', component: NewArticleComponent},
	{ path: 'edit', component: EditArticleComponent },
	{path: 'profile', component : LoginComponent},


];
	

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
