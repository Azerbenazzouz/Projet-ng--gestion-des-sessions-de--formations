import { NgModule } from '@angular/core';
import { RouterModule, Routes , Router} from '@angular/router';
import { inject } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormationComponent } from './formation/formation.component';
import { DetailsComponent } from './details/details.component';
import { authGuard } from './guard/auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginService } from './service/login.service';

// , canActivate : [!authGuard]

const AuthGuard = () : boolean => {
  const loginService = inject(LoginService);
  const router = inject(Router);

  if(loginService.isAuthenticated()){
    router.navigate(['']);
  }
  return !loginService.isAuthenticated();
}

const condidatGuard = () : boolean => {
  const loginService = inject(LoginService);
  const router = inject(Router);
  return loginService.role() == 'condidat';
}

const routes: Routes = [
  { path: 'home' , component: HomeComponent},
  { path: 'login' , component: LoginComponent , canActivate : [AuthGuard]},
  { path: 'register' , component: RegisterComponent , canActivate : [AuthGuard]},
  { path: 'formation' , component: FormationComponent},
  { path: 'formation/:search' , component: FormationComponent},
  { path: 'formation/categorie' , component: FormationComponent},
  { path: 'formation/categorie/:cat' , component: FormationComponent},
  { path: 'formation/details' , component: FormationComponent},
  { path: 'formation/details/:id' , component: DetailsComponent},
  { path: 'profile/:id', component: ProfileComponent},
  { path: 'setting' , component: SettingsComponent},
  { path: 'contacternous' , component: ContactUsComponent},
  { path: '**' , component: HomeComponent},
  { path: '' , redirectTo: 'home' , pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
