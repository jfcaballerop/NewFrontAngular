import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { PermissionService } from '../services/permission.service';
import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { SecurityPermissionComponent } from './security-permission/security-permission.component';
import { SecurityComponent } from './security/security.component';
import { PermissionSortService } from './services/permission-sort.service';



@NgModule({
  declarations: [SecurityComponent, SecurityPermissionComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    CoreModule
  ],
  exports: [AdminRoutingModule],
  providers: [PermissionService, PermissionSortService]
})
export class AdminModule { }
