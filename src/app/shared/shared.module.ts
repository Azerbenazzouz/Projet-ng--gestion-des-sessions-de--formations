import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterService } from './service/register.service';
import { LoginService } from './service/login.service';
import { FormationService } from './service/formation.service';
import { UserService } from './service/user.service';
import { ClientService } from './service/client.service';


@NgModule({
  declarations: [],
  providers: [RegisterService,LoginService,FormationService,UserService,ClientService],
  imports: [
    CommonModule,
    SharedRoutingModule,
    NavbarComponent,
    FooterComponent,
    HttpClientModule
  ]
})
export class SharedModule { }
