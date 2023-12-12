import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input } from '@angular/core';
import { Iproduct } from '../../model/iproduct';
import { IUser } from '../../model/iuser';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() product : Iproduct= {
    title: '',
    description: '',
    image: '',
    hours: 0,
    date: new Date(),
    program: '',
    difficulty: 'intermediate',
    tags: [],
    categories: [],
    idFormateur: [],
    id: 0
  };


  formatuer1 : IUser = {
    name: 'Lewis Hamilton',
    telephone: '0606060606',
    email: "mouhamed@gmail.com",
    password: "123456",
    role: "formateur",
    id: 1
  }

  formatuer2 : IUser = {
    name: 'Sebastian Vettel',
    telephone: '0606060606',
    email: "ali@gmail.com",
    password: "123456",
    role: "formateur",
    id: 2
  }

  getUserById(id: number): IUser {
    if(id == 1){
      return this.formatuer1;
    }else{
      return this.formatuer2;
    }
  } 
  bgDifficultyColor (){
    switch(this.product.difficulty){
      case 'beginner': return 'border-success';
      case 'intermediate': return 'border-warning';
      case 'advanced': return 'border-danger';
    }
  }

  aletoirColor(){
    let colors = ['bg-primary','bg-secondary','bg-success','bg-danger','bg-warning','bg-info','bg-dark'];
    let aletoir = Math.floor(Math.random() * colors.length);
    return colors[aletoir];
  }

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
}
