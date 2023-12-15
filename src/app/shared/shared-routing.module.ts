import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormationComponent } from './formation/formation.component';
import { DetailsComponent } from './details/details.component';
// import { authGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '' , component: HomeComponent},
  { path: 'home' , component: HomeComponent},
  { path: 'login' , component: LoginComponent },
  { path: 'register' , component: RegisterComponent},
  { path: 'formation' , component: FormationComponent},
  { path: 'formation/:search' , component: FormationComponent},
  { path: 'formation/categorie' , component: FormationComponent},
  { path: 'formation/categorie/:cat' , component: FormationComponent},
  { path: 'formation/details' , component: FormationComponent},
  { path: 'formation/details/:id' , component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
