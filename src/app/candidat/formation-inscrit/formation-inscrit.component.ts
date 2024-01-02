import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { CommonModule } from '@angular/common';

import { FormationService } from '../../shared/service/formation.service';
import { Iproduct } from '../../shared/model/iproduct';
import {  RouterLink } from '@angular/router';
import { ClientService } from '../../shared/service/client.service';
import { Client } from '../../shared/model/client';

@Component({
  selector: 'app-formation-inscrit',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,CommonModule,RouterLink],
  templateUrl: './formation-inscrit.component.html',
  styleUrl: './formation-inscrit.component.css'
})

export class FormationInscritComponent {
  formations : Iproduct[] = [];

  constructor(private users : ClientService , private formationS : FormationService){}

  ngOnInit(): void {
    this.users.getUSerById2(Number(localStorage.getItem('id'))).subscribe((data : Client|undefined) => {
      this.formationS.getByIds(data?.idSavedFormation).subscribe((data : Iproduct[]) => {
        this.formations = data;
      });
    });
    
  }

  getFormateurName (id : number){
    // this.user.getAll();
    return (this.users.getUserById(id)?.name)??"nom indisponible";
  }
}
