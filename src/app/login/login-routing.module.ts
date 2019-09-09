import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginLogestaComponent } from './login-logesta/login-logesta.component';

const loginRoutes: Routes = [
    {
        path: 'login',
        component: LoginLogestaComponent
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
