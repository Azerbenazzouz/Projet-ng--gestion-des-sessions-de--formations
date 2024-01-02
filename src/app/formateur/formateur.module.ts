import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormateurRoutingModule } from './formateur-routing.module';
import { ClientService } from '../shared/service/client.service';
import { FormationService } from '../shared/service/formation.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  providers: [ClientService,FormationService],
  imports: [
    CommonModule,
    FormateurRoutingModule,
    HttpClientModule
  ]
})
export class FormateurModule { }
