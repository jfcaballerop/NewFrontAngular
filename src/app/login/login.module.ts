import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginCardComponent } from './login-card/login-card.component';
import { LoginRoutingModule } from './login-routing.module';



@NgModule({
  declarations: [LoginCardComponent],
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  exports: []
})
export class LoginModule { }
