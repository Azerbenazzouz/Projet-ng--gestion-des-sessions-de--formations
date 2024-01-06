import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormationComponent } from './formation/formation.component';
import { DetailsComponent } from './details/details.component';
import { authGuard } from './guard/auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';

// , canActivate : [!authGuard]
const routes: Routes = [
  { path: '' , component: HomeComponent},
  { path: 'home' , component: HomeComponent},
  { path: 'login' , component: LoginComponent},
  { path: 'register' , component: RegisterComponent },
  { path: 'formation' , component: FormationComponent},
  { path: 'formation/:search' , component: FormationComponent},
  { path: 'formation/categorie' , component: FormationComponent},
  { path: 'formation/categorie/:cat' , component: FormationComponent},
  { path: 'formation/details' , component: FormationComponent},
  { path: 'formation/details/:id' , component: DetailsComponent},
  { path: 'profile/:id', component: ProfileComponent},
  { path: 'setting' , component: SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
