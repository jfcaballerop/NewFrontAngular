import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuardService } from './auth-guard/auth-guard.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [AuthGuardService]
})
export class CoreModule { }
