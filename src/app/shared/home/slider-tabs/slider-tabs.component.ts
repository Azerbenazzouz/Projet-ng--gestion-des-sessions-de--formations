import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductGroupComponent } from '../../formation/product-group/product-group.component';
import { Iproduct } from '../../model/iproduct';
import { FormationService } from '../../service/formation.service';

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

  products: Iproduct[] = [];
  product : Iproduct[] = [];
  constructor(private formation: FormationService ) {
    this.formation.getAll().subscribe((data : Iproduct[]) => {
      this.products = data;
      this.product = data;
      this.tabs = this.categorys();
    });

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
