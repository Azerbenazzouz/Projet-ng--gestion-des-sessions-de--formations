import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { CommonModule } from '@angular/common';

import { UserService } from './../../shared/service/user.service';
import { FormationService } from '../../shared/service/formation.service';
import { Iproduct } from '../../shared/model/iproduct';
import { IUser } from '../../shared/model/iuser';
import {  RouterLink } from '@angular/router';

@Component({
  selector: 'app-formation-inscrit',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,CommonModule,RouterLink],
  templateUrl: './formation-inscrit.component.html',
  styleUrl: './formation-inscrit.component.css'
})

export class FormationInscritComponent {
  formations : Iproduct[] = [];

  constructor(private users : UserService , private formationS : FormationService){}

  ngOnInit(): void {
    this.users.getUSerById2(Number(localStorage.getItem('id'))).subscribe((data : IUser|undefined) => {
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
