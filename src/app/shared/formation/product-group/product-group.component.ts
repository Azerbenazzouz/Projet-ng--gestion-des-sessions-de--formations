import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { Iproduct } from '../../model/iproduct';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-group',
  standalone: true,
  imports: [CommonModule,ProductComponent,RouterLink, CommonModule],
  templateUrl: './product-group.component.html',
  styleUrl: './product-group.component.css'
})
export class ProductGroupComponent {
  location : string = this.route.url;
  @Input() product : Iproduct[]= [];

  constructor(private route : Router) { }

  

}
