import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { CommonModule } from '@angular/common';

import { UserService } from './../../shared/service/user.service';
import { FormationService } from '../../shared/service/formation.service';
import { Iproduct } from '../../shared/model/iproduct';

@Component({
  selector: 'app-formation-inscrit',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,CommonModule],
  templateUrl: './formation-inscrit.component.html',
  styleUrl: './formation-inscrit.component.css'
})

export class FormationInscritComponent {
  formations : Iproduct[] = [];

  constructor(private userS : UserService , private formationS : FormationService){}

  ngOnInit(){
    let id = Number(localStorage.getItem("id"));
    let a = this.userS.getAllSavedFormationId(id);

    let f = this.formationS.getByIds(a);

    console.log(f)

    if(f){
      console.log(f)
    }
  }
}
