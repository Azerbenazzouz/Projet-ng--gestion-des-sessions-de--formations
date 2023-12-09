import { Component } from '@angular/core';
import { ICarouselCategorie } from '../../model/icarousel-categorie';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel-categorie',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel-categorie.component.html',
  styleUrl: './carousel-categorie.component.css'
})
export class CarouselCategorieComponent {

  categories : ICarouselCategorie[] = [
    {
      id: 1,
      name: 'Categorie 1',
      description: 'Description 1',
      image: 'https://via.placeholder.com/350x150'
    },
    {
      id: 2,
      name: 'Categorie 2',
      description: 'Description 2',
      image: 'https://via.placeholder.com/350x150'
    },
    {
      id: 3,
      name: 'Categorie 3',
      description: 'Description 3',
      image: 'https://via.placeholder.com/350x150'
    }
  ];
  constructor() {}

  ngOnInit() {}
}
