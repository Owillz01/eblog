import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent} from './modules/home/home/home.component';
import { LoginComponent} from './modules/auth/login/login.component';
import { SignupComponent} from './modules/auth/signup/signup.component';
import { DashboardComponent } from './modules/profile/dashboard/dashboard.component'
import {NewArticleComponent } from './modules/editor/new-article/new-article.component'
import {EditArticleComponent } from './modules/editor/edit-article/edit-article.component';
import { ArticleComponent } from './modules/article/article/article.component';
import { SettingsComponent } from './modules/settings/settings.component';
import { UsersComponent } from './modules/profile/users/users.component';
import { ErrorComponent } from './error/error.component'

const routes: Routes = [
	{path: '', component : HomeComponent},
	{path: 'signup', component : SignupComponent},
	{path: 'signin', component : LoginComponent},
	{path: 'new', component: NewArticleComponent},
	{ path: 'edit/:slug', component: EditArticleComponent },
	{path: 'profile', component : DashboardComponent},
	{path: 'article/:slug', component: ArticleComponent},
	{path: 'settings', component: SettingsComponent},
	{path: 'user/:username', component: UsersComponent},
	{path: '**', component: ErrorComponent}


];
	

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation : 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
