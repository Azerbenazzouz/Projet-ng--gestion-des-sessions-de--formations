import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '' , loadChildren: ()=> import('./shared/shared.module').then(m => m.SharedModule) },
    { path: 'admin' , loadChildren: ()=> import('./admin/admin.module').then(m => m.AdminModule) },
    { path: '**' , redirectTo: '' },
    { path: '' , redirectTo: '/' , pathMatch: 'full'}
];
