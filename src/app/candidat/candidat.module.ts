import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatRoutingModule } from './candidat-routing.module';
import { UserService } from '../shared/service/user.service';
import { FormationService } from '../shared/service/formation.service';
import { HttpClientModule } from '@angular/common/http';
import { ClientService } from './../shared/service/client.service';


@NgModule({
  declarations: [],
  providers: [FormationService,UserService,HttpClientModule,ClientService],
  imports: [
  CommonModule,
    CandidatRoutingModule,
    HttpClientModule
  ]
})
export class CandidatModule { }
