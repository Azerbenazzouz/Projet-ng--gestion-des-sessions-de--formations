import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { ProductGroupComponent } from '../product-group/product-group.component';

import { FormationService } from '../../service/formation.service';
import { Iproduct } from '../../model/iproduct';

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

  products: Iproduct[] = [];
  product: Iproduct[] = [];

  constructor(private route: ActivatedRoute, private formation: FormationService) { }
  
  ngOnInit(): void {

    this.formation.getAll().subscribe((data : Iproduct[]) => {
      this.products = data;
      this.product = data;

      this.route.params.subscribe(params => {
        this.search = params['search'];
        if(this.search != undefined){
          this.filter();
        }
      });
      
      this.categories = this.categoriesGet();
      this.difficulties = this.difficultiesGet();
    });
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

    this.categories = this.categoriesGet();
    this.difficulties = this.difficultiesGet();
  }

}
