import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormateurRoutingModule } from './formateur-routing.module';
import { ClientService } from '../shared/service/client.service';
import { FormationService } from '../shared/service/formation.service';
import { FormationFService } from './service/formation-f.service';
import { HttpClientModule } from '@angular/common/http';
import { NgToastModule, NgToastService } from 'ng-angular-popup';


@NgModule({
  declarations: [],
  providers: [ClientService,FormationService,HttpClientModule,FormationFService,NgToastService],
  imports: [
    CommonModule,
    FormateurRoutingModule,
    HttpClientModule,
    NgToastModule 
  ]
})
export class FormateurModule { }
