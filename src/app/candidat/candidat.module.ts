import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatRoutingModule } from './candidat-routing.module';
import { UserService } from '../shared/service/user.service';
import { FormationService } from '../shared/service/formation.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  providers: [FormationService,UserService],
  imports: [
    CommonModule,
    CandidatRoutingModule,
    HttpClientModule
  ]
})
export class CandidatModule { }
