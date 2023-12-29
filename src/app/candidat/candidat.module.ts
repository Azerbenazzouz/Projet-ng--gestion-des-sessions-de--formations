import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatRoutingModule } from './candidat-routing.module';
import { UserService } from '../shared/service/user.service';
import { FormationService } from '../shared/service/formation.service';


@NgModule({
  declarations: [],
  providers: [FormationService,UserService],
  imports: [
    CommonModule,
    CandidatRoutingModule
  ]
})
export class CandidatModule { }
