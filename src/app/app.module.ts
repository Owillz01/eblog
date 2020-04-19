import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';
// import {NgxPaginationModule} from 'ngx-pagination';
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
import { ProfileModule } from './modules/profile/profile.module';
import { ArticleModule } from './modules/article/article.module';
import { EditorModule } from './modules/editor/editor.module';
import { SettingsModule } from './modules/settings/settings.module';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    // NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SharedModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({preventDuplicates: true,}),
    HomeModule,
    AuthModule,
    CoreModule,
    ProfileModule,
    EditorModule,
    ArticleModule,
    SettingsModule
  ],
  providers: [AuthService,
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
