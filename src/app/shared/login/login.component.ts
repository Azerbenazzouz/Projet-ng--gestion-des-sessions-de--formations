import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';
import { FormControl , FormGroup , ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,NavbarComponent,FooterComponent,RouterLink,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  errors: any = {
    email: '',
    password: ''
  };
  constructor() {}

  ngOnInit(): void {}

  loginForm = new FormGroup({
    email: new FormControl('', {validators: [Validators.required, Validators.email]}),
    password: new FormControl('',Validators.required)
  });

  loginSubmit() {    
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
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
