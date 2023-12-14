import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterService } from './service/register.service';
import { LoginService } from './service/login.service';


@NgModule({
  declarations: [],
  providers: [RegisterService,LoginService],
  imports: [
    CommonModule,
    SharedRoutingModule,
    NavbarComponent,
    FooterComponent,
    HttpClientModule
  ]
})
export class SharedModule { }
