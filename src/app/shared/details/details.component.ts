import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from './../model/iproduct';

import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [NavbarComponent , FooterComponent , CommonModule ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {  
  id : number;
  constructor( private route : ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
   }
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
  }

  product: Iproduct = {
    title: 'Angular',
    description: 'Angular is a platform for building mobile and desktop web applications.',
    image: 'https://picsum.photos/1000',
    hours: 10,
    date: new Date('2024-05-07 14:01'),
    program: 'https://angular.io/',
    difficulty: 'beginner',
    tags: ['angular', 'javascript', 'html', 'css'],
    categories: ['web', 'mobile', 'desktop'],
    idFormateur: [1, 2],
    idCondidat: [1, 2],
    id: 1
  };
  
  Auth = ()=>{
    return window.localStorage.getItem("accessToken") ? true : false;
  }
  
}
