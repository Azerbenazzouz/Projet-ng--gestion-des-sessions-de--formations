import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreerFormationComponent } from './creer-formation/creer-formation.component';
import { MesFormationsComponent } from './mes-formations/mes-formations.component';

const routes: Routes = [
  { path: '', redirectTo: 'ajouterformation', pathMatch: 'full' },
  { path: 'ajouterformation', component: CreerFormationComponent },
  { path: 'mesformations', component: MesFormationsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormateurRoutingModule { }
