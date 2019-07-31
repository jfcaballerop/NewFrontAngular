import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginCardComponent } from './login-card/login-card.component';
const loginRoutes: Routes = [
    {
        path: 'login',
        component: LoginCardComponent,
        pathMatch: 'full'
    },
    {
        path: '',
        component: LoginCardComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(loginRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class LoginRoutingModule { }
