import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyteseoCardComponent } from './myteseo-card/myteseo-card.component';

const homeRoutes: Routes = [
    {
        path: 'home',
        pathMatch: 'full',
        component: MyteseoCardComponent
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
