import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { Iproduct } from '../../model/iproduct';

@Component({
  selector: 'app-product-group',
  standalone: true,
  imports: [CommonModule,ProductComponent],
  templateUrl: './product-group.component.html',
  styleUrl: './product-group.component.css'
})
export class ProductGroupComponent {
  product: Iproduct[] = [{
      title: 'Angular',
      description: 'Angular is a platform for building mobile and desktop web applications.',
      image: 'https://angular.io/assets/images/logos/angular/angular.png',
      hours: 10,
      date: new Date('2024-05-07'),
      program: 'https://angular.io/',
      difficulty: 'beginner',
      tags: ['angular', 'javascript', 'html', 'css'],
      categories: ['web', 'mobile', 'desktop'],
      idFormateur: [1, 2],
      id: 1
    },{
      title: 'Angular2',
      description: 'Angular is a platform for building mobile and desktop web applications.',
      image: 'https://angular.io/assets/images/logos/angular/angular.png',
      hours: 10,
      date: new Date('2024-05-07'),
      program: 'https://angular.io/',
      difficulty: 'advanced',
      tags: ['angular', 'javascript', 'html', 'css'],
      categories: ['web', 'mobile', 'desktop'],
      idFormateur: [1, 2],
      id: 1
    },
    {
      title: 'Angular3',
      description: 'Angular is a platform for building mobile and desktop web applications.',
      image: 'https://angular.io/assets/images/logos/angular/angular.png',
      hours: 10,
      date: new Date('2024-05-07'),
      program: 'https://angular.io/',
      difficulty: 'intermediate',
      tags: ['angular', 'javascript', 'html', 'css'],
      categories: ['web', 'mobile', 'desktop'],
      idFormateur: [1, 2],
      id: 1
    },
  ];
}
