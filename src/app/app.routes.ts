import { Routes } from '@angular/router';
// import { authGuard } from './shared/guard/auth.guard';

export const routes: Routes = [
    { path: '' , loadChildren: ()=> import('./shared/shared.module').then(m => m.SharedModule) },
    { path: 'admin' , loadChildren: ()=> import('./admin/admin.module').then(m => m.AdminModule)},
    { path: 'condidat' , loadChildren: ()=> import('./candidat/candidat.module').then(m =>m.CandidatModule)},
    { path: 'formateur' , loadChildren: ()=> import('./formateur/formateur.module').then(m => m.FormateurModule)},
    // { path: '**' , redirectTo: '' },
    { path: '' , redirectTo: '/' , pathMatch: 'full'}
];
