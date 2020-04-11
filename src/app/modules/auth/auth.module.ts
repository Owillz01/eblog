import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms'

import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';

// import { AuthRoutingModule} from './auth.router.module'



@NgModule({
  declarations: [SignupComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
    // AuthRoutingModule
  ]
  // exports: [SignupComponent, LoginComponent]
})
export class AuthModule { }
