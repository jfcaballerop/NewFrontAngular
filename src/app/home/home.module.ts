import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { MyteseoCardComponent } from './myteseo-card/myteseo-card.component';



@NgModule({
  declarations: [MyteseoCardComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [
    MyteseoCardComponent
  ]
})
export class HomeModule { }
