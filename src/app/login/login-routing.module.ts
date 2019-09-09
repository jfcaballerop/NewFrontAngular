import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginCardComponent } from './login-card/login-card.component';
import { LoginContainerComponent } from './login-container/login-container.component';
import { LoginLogestaComponent } from './login-logesta/login-logesta.component';

// const loginRoutes: Routes = [
//     {
//         path: 'login',
//         component: LoginContainerComponent,
//         children: [
//             { path: '', component: LoginCardComponent, pathMatch: 'full' }
//         ]
//     }
// ];
const loginRoutes: Routes = [
    {
        path: 'login',
        component: LoginLogestaComponent,
        // children: [
        //     { path: '', component: LoginCardComponent, pathMatch: 'full' }
        // ]
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
