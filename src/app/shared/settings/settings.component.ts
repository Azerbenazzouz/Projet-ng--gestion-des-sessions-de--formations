import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';

import { FormControl , FormGroup , ReactiveFormsModule, Validators } from '@angular/forms';

import { ClientService } from '../service/client.service';
import { Client } from '../model/client';

import { NgToastModule, NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [FooterComponent,NavbarComponent,CommonModule,ReactiveFormsModule,NgToastModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  client? : Client;
  id : number=0;
  constructor(private clientService : ClientService , private toast : NgToastService ) { }

  clientForm = new FormGroup({
    name : new FormControl('',Validators.required),
    cin: new FormControl('',{validators: [Validators.required, Validators.minLength(8), Validators.maxLength(8) , Validators.pattern("^[0-9]*$")]}),
    telephone: new FormControl('',{validators: [Validators.required, Validators.minLength(8), Validators.maxLength(8) , Validators.pattern("^[0-9]*$")]}),
    // email: new FormControl('', {validators: [Validators.required, Validators.email]}),
    role: new FormControl('',Validators.required),
    img: new FormControl('',Validators.nullValidator)
  });

  MdpChangeForm = new FormGroup({
    password: new FormControl('',Validators.required),
    newPassword: new FormControl('',Validators.required),
    newPassword2: new FormControl('',Validators.required)
  });

  EmailChangerForm = new FormGroup({
    email: new FormControl('', {validators: [Validators.required, Validators.email]}),
    password: new FormControl('',Validators.required)
  });

  ngOnInit() {
    this.id = Number(localStorage.getItem('id'));

    this.clientService.getUSerById2(this.id).subscribe({
      next : (data : any) => {
        this.client = data;
        console.log(this.clientForm.value);
        this.clientForm.patchValue({
          name : this.client?.name??'',
          cin : this.client?.cin??'',
          telephone : this.client?.telephone??'',
          role : this.client?.role??'',
          img : this.client?.img??''
        });
      }
    })

  }

  changerInformation(){
    if(this.clientForm.valid){
      let clientM : Client = {
        name : this.clientForm.value.name??this.client?.name??'',
        cin : this.clientForm.value.cin??this.client?.cin??'',
        telephone : this.clientForm.value.telephone??this.client?.telephone??'',
        email : this.client?.email??'',
        role : this.client?.role??'',
        img : this.clientForm.value.img??this.client?.img,
        idSavedFormation : this.client?.idSavedFormation??[],
        id : this.client?.id??0
      }
      this.clientService.changeInformation(this.id,clientM).subscribe({
        next : (data : any) => {
          this.toast.success({detail:"Changer Mes Information",summary:'Vos informations ont été changées',duration:5000});
        }
      })
    }else{
      this.toast.error({detail:"Changer Mes Information",summary:'Veuillez remplir les champs correctement',duration:5000});
    }
  }

  changerPassword(){
    // if(this.MdpChangeForm.valid){
    //   console.log(this.MdpChangeForm.value);
    // }else{
    //   this.toast.error({detail:"ERROR",summary:'Veuillez remplir les champs correctement',duration:5000});
    // }
    this.toast.info({detail:"Changer la Mot de passe",summary:'Indisponible Pour Le moment',duration:5000});

  }

  changerEmail(){
    // if(this.EmailChangerForm.valid){
    //   console.log(this.EmailChangerForm.value);
    // }else{
    //   this.toast.error({detail:"ERROR",summary:'Veuillez remplir les champs correctement',duration:5000});
    // }

    this.toast.info({detail:"Changer Email",summary:'Indisponible Pour Le moment',duration:5000});
  }

}
