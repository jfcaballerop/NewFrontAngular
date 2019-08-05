import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthGuardService } from './auth-guard/auth-guard.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [AuthGuardService]
})
export class CoreModule { }
