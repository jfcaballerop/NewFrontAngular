import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from '../layout/main-layout/main-layout.component';
import { MyteseoContainerComponent } from './myteseo-container/myteseo-container.component';
import { AuthGuardService } from '../core/auth-guard/auth-guard.service';

const myteseoRoutes: Routes = [
    {
        path: 'myteseo',
        component: MainLayoutComponent,
        children: [
            { path: '', pathMatch: 'full', component: MyteseoContainerComponent, canActivate: [AuthGuardService] }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(myteseoRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class MyteseoRoutingModule { }
