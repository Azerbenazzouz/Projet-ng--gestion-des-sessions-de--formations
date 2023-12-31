import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CarouselCategorieComponent } from './carousel-categorie/carousel-categorie.component';
import { SliderTabsComponent } from './slider-tabs/slider-tabs.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,NavbarComponent,FooterComponent,CarouselCategorieComponent,SliderTabsComponent],
templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
