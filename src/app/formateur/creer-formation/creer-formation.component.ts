import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';

import { FormControl , FormGroup , ReactiveFormsModule, Validators } from '@angular/forms';
import { NgToastModule, NgToastService } from 'ng-angular-popup';
import { FormationFService } from '../service/formation-f.service';
import { FormationDTO } from '../model/formation-dto';
import { Client } from '../../shared/model/client';
import { ClientService } from '../../shared/service/client.service';

@Component({
  selector: 'app-creer-formation',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,CommonModule,ReactiveFormsModule,NgToastModule ],
  templateUrl: './creer-formation.component.html',
  styleUrl: './creer-formation.component.css'
})
export class CreerFormationComponent {
  formateurs : Client[] = []
  constructor(private toast : NgToastService , private FormationF : FormationFService , private clientService : ClientService) {}

  ngOnInit(): void {
    this.clientService.getAllFormateur().subscribe({
      next : (data : Client[]) => {
        data.forEach((element : Client) => {
          if(Number(localStorage.getItem('id')) != element.id){
            this.formateurs.push(element);
          }
        });
      }
    });
  }

  creerFormationForm = new FormGroup({
    title : new FormControl('',Validators.required),
    date : new FormControl('',Validators.required),
    hours : new FormControl('',Validators.required),
    difficulté : new FormControl('',Validators.required),
    formateur : new FormControl('',Validators.required),
    image : new FormControl('',Validators.required),
    program : new FormControl('',Validators.required),
    tags : new FormControl('',Validators.required),
    categories : new FormControl('',Validators.required),
    description : new FormControl('',Validators.required),
  });

  creerFormation = () => {
    if(this.creerFormationForm.invalid){
      this.toast.error({detail:"ERROR",summary:'Formulaire invalide',duration:5000});
    }else{
      this.toast.success({detail:"SUCCESS",summary:'Formulaire valide',duration:5000});
      let formation : FormationDTO = {
        title : this.creerFormationForm.value.title??"",
        date : this.creerFormationForm.value.date??"",
        hours : Number(this.creerFormationForm.value.hours)??0,
        difficulty : this.creerFormationForm.value.difficulté??"",
        idFormateur : [Number(this.creerFormationForm.value.formateur),Number(localStorage.getItem('id'))]??[Number(localStorage.getItem('id'))],
        idCondidat : [],
        image : this.creerFormationForm.value.image??"",
        program : this.creerFormationForm.value.program??"",
        tags : this.creerFormationForm.value.tags?.split(',')??[],
        categories : this.creerFormationForm.value.categories?.split(',')??[],
        description : this.creerFormationForm.value.description??"",
      }
      this.FormationF.addFormation(formation);
    }
  }
}
