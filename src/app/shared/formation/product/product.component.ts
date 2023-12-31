import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input } from '@angular/core';
import { Iproduct } from '../../model/iproduct';
import { IUser } from '../../model/iuser';
import {  RouterLink } from '@angular/router';
import { UserService } from '../../service/user.service';

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
    date: "",
    program: '',
    difficulty: 'intermediate',
    tags: [],
    categories: [],
    idFormateur: [],
    idCondidat: [],
    id: 0
  };

  getUserById(id: number): String {
    let user =this.user.getUserById(id);
    return user ? user.name : "nom indisponible";
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

  constructor(private user : UserService) { }

  ngOnInit(): void {
  }

  
  
}
