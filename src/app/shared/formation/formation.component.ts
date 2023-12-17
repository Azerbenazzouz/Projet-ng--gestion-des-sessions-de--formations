import { Component } from '@angular/core';

import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { FilterComponent } from './filter/filter.component';

@Component({
  selector: 'app-formation',
  standalone: true,
  imports: [CommonModule,RouterLink,NavbarComponent,FooterComponent,FilterComponent],
templateUrl: './formation.component.html',
  styleUrl: './formation.component.css'
})
export class FormationComponent {
  search: string = '';
  addSearch(search: string) {
    this.search = search;
    console.log(this.search);
  }
}
