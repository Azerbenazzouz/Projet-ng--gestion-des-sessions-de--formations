import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivatedRoute, Router } from '@angular/router';
import { FormControl , FormGroup , ReactiveFormsModule, Validators } from '@angular/forms';
import { NgToastModule, NgToastService } from 'ng-angular-popup';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';

import { FormationFService } from '../service/formation-f.service';
import { FormationService } from '../../shared/service/formation.service';
import { Iproduct } from '../../shared/model/iproduct';
import { FormationDTO } from '../model/formation-dto';
import { Client } from '../../shared/model/client';
import { ClientService } from '../../shared/service/client.service';

@Component({
  selector: 'app-modifier-formation',
  standalone: true,
  imports: [NavbarComponent , FooterComponent , CommonModule , ReactiveFormsModule , NgToastModule],
  templateUrl: './modifier-formation.component.html',
  styleUrl: './modifier-formation.component.css'
})
export class ModifierFormationComponent {
  id : number=0;
  formateurs : Client[] = []

  constructor( private route : ActivatedRoute, private router : Router , private toast : NgToastService , private FormationF : FormationFService , private formationS : FormationService,private clientService : ClientService) { }

  editFormationForm = new FormGroup({
    title : new FormControl('',Validators.required),
    date : new FormControl('',Validators.required),
    hours : new FormControl('',Validators.required),
    difficulté : new FormControl('',Validators.required),
    formateur : new FormControl('',Validators.required),
    image : new FormControl('',Validators.required),
    program : new FormControl('',Validators.required),
    tags : new FormControl('',Validators.required),
    categories : new FormControl('',Validators.required),
    description : new FormControl('',Validators.required)
  });
  
  editFormation = () => {
    if(this.editFormationForm.invalid){
      this.toast.error({detail:"ERROR",summary:'Formulaire invalide',duration:5000});
    }else{
      this.toast.success({detail:"SUCCESS",summary:'Formulaire valide',duration:5000});
      let formation : FormationDTO = {
        title : this.editFormationForm.value.title??"",
        date : this.editFormationForm.value.date??"",
        hours : Number(this.editFormationForm.value.hours)??0,
        difficulty : this.editFormationForm.value.difficulté??"",
        idFormateur : [Number(this.editFormationForm.value.formateur),Number(localStorage.getItem('id'))]??[Number(localStorage.getItem('id'))],
        idCondidat : [],
        image : this.editFormationForm.value.image??"",
        program : this.editFormationForm.value.program??"",
        tags : this.editFormationForm.value.tags?.split(',')??[],
        categories : this.editFormationForm.value.categories?.split(',')??[],
        description : this.editFormationForm.value.description??"",
        id : this.id
      }
      this.FormationF.editFormation(this.id,formation);
    }
  }
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if(!this.id){
      this.router.navigate(['/formateur/mesformations']);
    }
    this.clientService.getAllFormateur().subscribe({
      next : (data : Client[]) => {
        data.forEach((element : Client) => {
          if(Number(localStorage.getItem('id')) != element.id){
            this.formateurs.push(element);
          }
        });
      }
    });

    let f:string;
    this.formationS.getOne2(this.id).subscribe({
      next : (data : Iproduct) => {
        data.idFormateur.forEach((id : number) => {
          if(id != Number(localStorage.getItem('id'))){
            f = id.toString();
          }
        });
        this.editFormationForm.setValue({
          title : data.title,
          date : data.date,
          hours : data.hours.toString(),
          difficulté : data.difficulty,
          formateur : f??data.idFormateur[0].toString(),
          image : data.image,
          program : data.program,
          tags : data.tags.join(', '),
          categories : data.categories.join(', '),
          description : data.description
        });
      }
    }); 
  }

  cnacel () {
    this.router.navigate(['/formateur/mesformations']);
  }
}
