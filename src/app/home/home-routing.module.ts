import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyteseoContainerComponent } from './myteseo-container/myteseo-container.component';

const homeRoutes: Routes = [
    {
        path: 'home',
        pathMatch: 'full',
        component: MyteseoContainerComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(homeRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class HomeRoutingModule {}
