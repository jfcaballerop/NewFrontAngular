import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { JwtInterceptor } from './core/interceptor/jwt.interceptor';
import { LayoutModule } from './layout/layout.module';
import { LoginModule } from './login/login.module';
import { MyteseoModule } from './myteseo/myteseo.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    MyteseoModule,
    AdminModule,
    LayoutModule,
    SharedModule,
    CoreModule,
    AppRoutingModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
