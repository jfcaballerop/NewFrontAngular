import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { PermissionProfileService } from '../services/permission-profile.service';
import { PermissionService } from '../services/permission.service';
import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { PermissionProfileComponent } from './permission-profile/permission-profile.component';
import { SecurityPermissionComponent } from './security-permission/security-permission.component';
import { SecurityComponent } from './security/security.component';
import { PermissionSortService } from './services/permission-sort.service';
import { PermissionProfileDetailComponent } from './permission-profile-detail/permission-profile-detail.component';
import { SecurityPermissionDetailComponent } from './security-permission-detail/security-permission-detail.component';



@NgModule({
  declarations: [
    SecurityComponent,
    SecurityPermissionComponent,
    PermissionProfileComponent,
    PermissionProfileDetailComponent,
    SecurityPermissionDetailComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    CoreModule
  ],
  exports: [AdminRoutingModule],
  providers: [PermissionService, PermissionSortService, PermissionProfileService]
})
export class AdminModule { }
