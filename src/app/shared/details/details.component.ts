import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [NavbarComponent , FooterComponent , CommonModule ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  constructor( private route : Router) { }
  
  Auth = ()=>{
    return window.localStorage.getItem("accessToken") ? true : false;
  }
  
}
