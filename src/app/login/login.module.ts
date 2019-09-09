import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { AuthenticationService } from '../services/authentication.service';
import { SharedModule } from '../shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginLogestaComponent } from './login-logesta/login-logesta.component';



@NgModule({
  declarations: [LoginLogestaComponent],
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
