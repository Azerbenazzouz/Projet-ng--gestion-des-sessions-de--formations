import { Routes } from '@angular/router';
import { authGuard } from './shared/guard/auth.guard';

export const routes: Routes = [
    { path: '' , loadChildren: ()=> import('./shared/shared.module').then(m => m.SharedModule) },
    { path: 'admin' , loadChildren: ()=> import('./admin/admin.module').then(m => m.AdminModule) , canActivate: [authGuard]},
    { path: '**' , redirectTo: '' },
    { path: '' , redirectTo: '/' , pathMatch: 'full'}
];
