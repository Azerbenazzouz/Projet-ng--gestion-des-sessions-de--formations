import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductGroupComponent } from '../../formation/product-group/product-group.component';

@Component({
  selector: 'app-slider-tabs',
  standalone: true,
  imports: [CommonModule,ProductGroupComponent],
  templateUrl: './slider-tabs.component.html',
  styleUrl: './slider-tabs.component.css'
})
export class SliderTabsComponent {
  tabs = ['Categorie 1', 'Categorie 2', 'Categorie 3', 'Categorie 4', 'Categorie 5'];
  category : number = 0;
  constructor() {}
  changeCategory(category : number) {
    this.category = category;
  }
}
