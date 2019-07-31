import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { MyteseoContainerComponent } from './myteseo-container/myteseo-container.component';



@NgModule({
  declarations: [MyteseoContainerComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [
    MyteseoContainerComponent
  ]
})
export class HomeModule { }
