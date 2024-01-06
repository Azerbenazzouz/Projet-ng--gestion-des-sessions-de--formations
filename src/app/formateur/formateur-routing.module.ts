import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreerFormationComponent } from './creer-formation/creer-formation.component';
import { MesFormationsComponent } from './mes-formations/mes-formations.component';
import { ModifierFormationComponent } from './modifier-formation/modifier-formation.component';
import { ListerMesInscritComponent } from './lister-mes-inscrit/lister-mes-inscrit.component';

const routes: Routes = [
  { path: '', redirectTo: 'ajouterformation', pathMatch: 'full' },
  { path: 'ajouterformation', component: CreerFormationComponent },
  { path: 'mesformations', component: MesFormationsComponent },
  { path: 'modifierformation/:id', component: ModifierFormationComponent },
  { path: 'listermesinscrit/:id', component: ListerMesInscritComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormateurRoutingModule { }
