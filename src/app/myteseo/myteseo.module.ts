import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MyteseoContainerComponent } from './myteseo-container/myteseo-container.component';
import { MyteseoHomeComponent } from './myteseo-home/myteseo-home.component';
import { MyteseoLeftComponent } from './myteseo-left/myteseo-left.component';
import { MyteseoRoutingModule } from './myteseo-routing.module';



@NgModule({
  declarations: [MyteseoContainerComponent, MyteseoHomeComponent, MyteseoLeftComponent],
  imports: [
    CommonModule,
    MyteseoRoutingModule,
    SharedModule
  ],
  exports: [
    MyteseoContainerComponent
  ]
})
export class MyteseoModule { }
