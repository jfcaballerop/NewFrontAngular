import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../core/auth-guard/auth-guard.service';
import { AdminLayoutComponent } from '../layout/admin-layout/admin-layout.component';
import { PermissionProfileComponent } from './permission-profile/permission-profile.component';
import { SecurityPermissionComponent } from './security-permission/security-permission.component';
import { SecurityComponent } from './security/security.component';

const adminRoutes: Routes = [
    {
        path: 'admin',
        component: AdminLayoutComponent,
        children: [
            { path: '', pathMatch: 'full', component: SecurityComponent },
            { path: 'permissions', pathMatch: 'full', component: SecurityPermissionComponent },
            {
                path: 'profiles', pathMatch: 'full',
                component: PermissionProfileComponent,
                data: { title: 'List of Profiles' }
            }
        ],
        canActivate: [AuthGuardService]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes)
    ],
    exports: [RouterModule]
})
export class AdminRoutingModule { }

