import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { Iproduct } from '../../shared/model/iproduct';
import { FormationFService } from '../service/formation-f.service';
import {  RouterLink } from '@angular/router';
import { NgToastModule, NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-mes-formations',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,CommonModule,RouterLink,NgToastModule],
  templateUrl: './mes-formations.component.html',
  styleUrl: './mes-formations.component.css'
})
export class MesFormationsComponent {
  formations: Iproduct[] = [];

  constructor(private FormationF : FormationFService , private toast : NgToastService) {
    this.FormationF.getMesFormations(Number(localStorage.getItem('id'))).subscribe((data : Iproduct[]) => {
      this.formations = data;
    });
  }

  supprimerFormation(idFormation : number) {
    this.FormationF.supprimerFormation(idFormation).subscribe((data : Iproduct) => {
      this.FormationF.getMesFormations(Number(localStorage.getItem('id'))).subscribe((data : Iproduct[]) => {
        this.formations = data;
      });
      this.toast.success({detail:"SUCCESS",summary:'Formation supprimée avec succès',duration:5000});
    });
  }
  NgOnInit() {}
}
