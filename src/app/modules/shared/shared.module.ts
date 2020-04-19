import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { Routes, RouterModule } from '@angular/router';
import { NgbCollapse } from './collapse'



@NgModule({
  declarations: [
  NavComponent, 
  FooterComponent,
  NgbCollapse
  ],
  imports: [
    CommonModule,
    RouterModule,
    
  ],
  exports:[
  	NavComponent,
  	FooterComponent
  ]
})
export class SharedModule { }
