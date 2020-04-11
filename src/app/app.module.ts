import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from "ngx-spinner";
import {NgxPaginationModule} from 'ngx-pagination';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import {SharedModule} from './modules/shared/shared.module';
// import {NavComponent} from './modules/shared/nav/nav.component'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule} from './modules/home/home.module';
import { AuthModule} from './modules/auth/auth.module';
import { CoreModule } from './modules/core/core.module';
import { AuthInterceptor } from './modules/core/interceptors/auth-interceptor';
import {AuthService} from './modules/core/services/authService/auth.service';
import { ProfileModule } from './modules/profile/profile.module'

@NgModule({
  declarations: [
    AppComponent,
    // NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SharedModule,
    NgxSpinnerModule,
    NgxPaginationModule,
    HomeModule,
    AuthModule,
    CoreModule,
    ProfileModule
  ],
  providers: [AuthService,
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
