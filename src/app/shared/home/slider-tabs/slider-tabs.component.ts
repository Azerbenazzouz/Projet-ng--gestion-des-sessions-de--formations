import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductGroupComponent } from '../../formation/product-group/product-group.component';
import { Iproduct } from '../../model/iproduct';

@Component({
  selector: 'app-slider-tabs',
  standalone: true,
  imports: [CommonModule,ProductGroupComponent],
  templateUrl: './slider-tabs.component.html',
  styleUrl: './slider-tabs.component.css'
})
export class SliderTabsComponent {
  tabs : string[]= [];
  category : number = 0;
  products: Iproduct[] = [{
      title: 'Angular',
      description: 'Angular is a platform for building mobile and desktop web applications.',
      image: 'https://angular.io/assets/images/logos/angular/angular.png',
      hours: 10,
      date: "2024-05-07 14:01",
      program: 'https://angular.io/',
      difficulty: 'beginner',
      tags: ['angular', 'javascript', 'html', 'css'],
      categories: ['web', 'mobile', 'desktop'],
      idFormateur: [1, 2],
      idCondidat: [1, 2],
      id: 1
    },{
      title: 'Angular2',
      description: 'Angular is a platform for building mobile and desktop web applications.',
      image: 'https://angular.io/assets/images/logos/angular/angular.png',
      hours: 10,
      date: "2024-05-07 14:01",
      program: 'https://angular.io/',
      difficulty: 'advanced',
      tags: ['angular', 'javascript', 'html', 'css'],
      categories: ['web', 'mobile', 'desktop'],
      idFormateur: [1, 2],
      idCondidat: [1, 2],
      id: 1
    },
    {
      title: 'Angular3',
      description: 'Angular is a platform for building mobile and desktop web applications.',
      image: 'https://angular.io/assets/images/logos/angular/angular.png',
      hours: 10,
      date: "2024-05-07 14:01",
      program: 'https://angular.io/',
      difficulty: 'intermediate',
      tags: ['angular', 'javascript', 'html', 'css'],
      categories: ['web', 'mobile', 'dvd0' ,'angular'],
      idFormateur: [1, 2],
      idCondidat: [1, 2],
      id: 1
    },
  ];
  product : Iproduct[] = [];
  constructor() {
    this.product = this.products;
  }


  categorys(){
    let categorys : string[] = [];
    this.product.forEach((element) => {
      element.categories.forEach((category) => {
        if(!categorys.includes(category)){
          categorys.push(category);
        }
      });
    });
    return categorys;
  }

  ngOnInit(): void {
    this.tabs = this.categorys();
  }

  filterCategory(idCat : number){
    this.category = idCat;
    let products : Iproduct[] = [];
    this.products.forEach((element) => {
      if(element.categories.includes(this.tabs[idCat])){
        products.push(element);
      }
    });
    this.product = products;
  }
}
