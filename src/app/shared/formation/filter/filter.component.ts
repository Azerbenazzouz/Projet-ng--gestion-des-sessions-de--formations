import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductGroupComponent } from '../product-group/product-group.component';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule,ProductGroupComponent],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {

}
