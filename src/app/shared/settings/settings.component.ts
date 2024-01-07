import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';

import { FormControl , FormGroup , ReactiveFormsModule, Validators } from '@angular/forms';

import { ClientService } from '../service/client.service';
import { Client } from '../model/client';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [FooterComponent,NavbarComponent,CommonModule,ReactiveFormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  client? : Client;
  id? : number;
  constructor(private clientService : ClientService) { }

  clientForm = new FormGroup({
    name : new FormControl('',Validators.required),
    cin: new FormControl('',{validators: [Validators.required, Validators.minLength(8), Validators.maxLength(8) , Validators.pattern("^[0-9]*$")]}),
    telephone: new FormControl('',{validators: [Validators.required, Validators.minLength(8), Validators.maxLength(8) , Validators.pattern("^[0-9]*$")]}),
    email: new FormControl('', {validators: [Validators.required, Validators.email]}),
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
          email : this.client?.email??'',
          role : this.client?.role??'',
          img : this.client?.img??''
        });
      }
    })

  }

  changerInformation(){
    console.log(this.clientForm.value);
  }

  changerPassword(){
    console.log(this.MdpChangeForm.value);
  }

  changerEmail(){
    console.log(this.EmailChangerForm.value);
  }

}
