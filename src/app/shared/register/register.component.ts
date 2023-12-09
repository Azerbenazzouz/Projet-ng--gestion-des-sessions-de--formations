import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';
import { FormControl , FormGroup , ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,NavbarComponent,FooterComponent,RouterLink,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  errors: any = {
    name: '',
    telephone: '',
    email: '',
    password: '',
    role: ''
  };

  constructor() {}

  ngOnInit(): void {}

  registerForm = new FormGroup({
    name : new FormControl('',Validators.required),
    telephone: new FormControl('',{validators: [Validators.required, Validators.minLength(8), Validators.maxLength(8) , Validators.pattern("^[0-9]*$")]}),
    email: new FormControl('', {validators: [Validators.required, Validators.email]}),
    password: new FormControl('',Validators.required),
    role: new FormControl('',Validators.required)
  });

  registerSubmit() {    
    if(this.registerForm.valid){
      console.log(this.registerForm.value);
    }else{
      // name
      if(this.registerForm.controls.name.invalid){
        this.errors.name = 'Inserer un nom valide';
      }else{
        this.errors.name = '';
      }
      // telephone
      if(this.registerForm.controls.telephone.invalid){
        this.errors.telephone = 'Inserer un numero de telephone valide';
      }else{
        this.errors.telephone = '';
      }
      // email
      if(this.registerForm.controls.email.invalid){
        this.errors.email = 'Inserer un email valide';
      }else{
        this.errors.email = '';
      }
      // password
      if(this.registerForm.controls.password.invalid){
        this.errors.password = 'Inserer un mot de passe valide';
      }else{
        this.errors.password = '';
      }
      // role
      if(this.registerForm.controls.role.invalid){
        this.errors.role = 'Inserer un role valide';
      }else{
        this.errors.role = '';
      }

    }
  }
}
