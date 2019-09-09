import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { SharedModule } from '../shared/shared.module';
import { LoginCardComponent } from './login-card/login-card.component';
import { LoginContainerComponent } from './login-container/login-container.component';
import { LoginRoutingModule } from './login-routing.module';
import { LoginLogestaComponent } from './login-logesta/login-logesta.component';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [LoginCardComponent, LoginContainerComponent, LoginLogestaComponent],
  imports: [
    CommonModule,
    SharedModule,
    LoginRoutingModule,
    CoreModule
  ],
  exports: [],
  providers: [AuthenticationService]
})
export class LoginModule { }
