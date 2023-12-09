import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-product-group',
  standalone: true,
  imports: [CommonModule,ProductComponent],
  templateUrl: './product-group.component.html',
  styleUrl: './product-group.component.css'
})
export class ProductGroupComponent {

}
