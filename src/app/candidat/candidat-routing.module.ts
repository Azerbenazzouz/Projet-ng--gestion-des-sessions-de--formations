import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormationInscritComponent } from './formation-inscrit/formation-inscrit.component';
// import { authGuard } from '../shared/guard/auth.guard';

const routes: Routes = [
  { path: '' , redirectTo: 'formationinscrit' , pathMatch: 'full'},
  { path :'formationinscrit', component : FormationInscritComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidatRoutingModule { }
