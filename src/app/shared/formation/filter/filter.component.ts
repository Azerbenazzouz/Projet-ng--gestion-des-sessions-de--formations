import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductGroupComponent } from '../product-group/product-group.component';
import { Iproduct } from '../../model/iproduct';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule,ProductGroupComponent, CommonModule , FormsModule ],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {

  categorie: string = "all";
  difficultie: string = "all";
  search : string = "";

  
  categories: string[] = [];
  difficulties: string[] = [];


  products: Iproduct[] = [{
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
      idCondidat: [1, 2],
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
      idCondidat: [1, 2],
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
      idCondidat: [1, 2],
      id: 1
    },
  ];

  product: Iproduct[] = [];

  constructor( private route: ActivatedRoute) { 
    this.product = this.products;
    this.route.params.subscribe(params => {
      this.search = params['search'];

      if(this.search != undefined){
        this.filter();
      }else{
        this.product = this.products;
      }
    });
    this.categories = this.categoriesGet();
    this.difficulties = this.difficultiesGet();
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.search = params['search'];

      if(this.search != undefined){
        this.filter();
      }else{
        this.product = this.products;
      }
    });
    this.categories = this.categoriesGet();
    this.difficulties = this.difficultiesGet();
  }

  categoriesGet(){
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

  difficultiesGet(){
    let difficulties : string[] = [];
    this.product.forEach((element) => {
      if(!difficulties.includes(element.difficulty)){
        difficulties.push(element.difficulty);
      }
    });
    return difficulties;
  }

  resitFilter(){
    this.product = this.products;
    this.route.params.subscribe(params => {
      this.search = params['search'];

      if(this.search != undefined){
        this.filter();
      }else{
        this.product = this.products;
      }
    });
    this.categories = this.categoriesGet();
    this.difficulties = this.difficultiesGet();
  }

  filter(){
    if(this.difficultie != "all" && this.categorie != "all" && this.search != undefined) {
      this.product = this.products.filter(p => p.difficulty.includes(this.difficultie) && p.categories.includes(this.categorie) && p.tags.includes(this.search));
    }else if(this.difficultie != "all"){
      this.product = this.products.filter(p => p.difficulty.includes(this.difficultie));
    }else if(this.categorie != "all"){
      this.product = this.products.filter(p => p.categories.includes(this.categorie));
    }else if(this.search != undefined ){
      this.product = this.products.filter(p => p.tags.includes(this.search))
    }else{
      this.resitFilter()
    }
  }
}
