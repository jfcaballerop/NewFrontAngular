import { CommonModule } from '@angular/common';
import { ErrorHandler, NgModule } from '@angular/core';
import { AuthGuardService } from './auth-guard/auth-guard.service';
import { GlobalErrorHandlerService } from './error-handler/global-error-handler.service';
import { JwtInterceptor } from './interceptor/jwt.interceptor';
import { UtilsService } from './utils/utils.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    UtilsService,
    JwtInterceptor,
    AuthGuardService,
    GlobalErrorHandlerService,
    { provide: ErrorHandler, useClass: GlobalErrorHandlerService }
  ]
})
export class CoreModule { }
