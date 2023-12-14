import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { ILogin } from '../model/ilogin';

import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';
import { FormControl , FormGroup , ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,NavbarComponent,FooterComponent,RouterLink,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  errors: ILogin = {
    email: '',
    password: ''
  };
  constructor(private LoginService : LoginService) {}

  ngOnInit(): void {}

  loginForm = new FormGroup({
    email: new FormControl('', {validators: [Validators.required, Validators.email]}),
    password: new FormControl('',Validators.required)
  });

  loginSubmit() {    
    if(this.loginForm.valid){
      this.LoginService.login(this.loginForm.controls.email.value??'',this.loginForm.controls.password.value??'').catch((err)=>{
        this.errors.password = 'Email ou mot de passe incorrect';
      });
    }else{
      if(this.loginForm.controls.email.invalid){
        this.errors.email = 'Inserer un email valide';
      }else{
        this.errors.email = '';
      }
      if(this.loginForm.controls.password.invalid){
        this.errors.password = 'Inserer un mot de passe valide';
      }else{
        this.errors.password = '';
      }
    }
  }
}
