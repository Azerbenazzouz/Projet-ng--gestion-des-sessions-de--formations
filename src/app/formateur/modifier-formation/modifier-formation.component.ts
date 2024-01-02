import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivatedRoute, Router } from '@angular/router';

import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';


@Component({
  selector: 'app-modifier-formation',
  standalone: true,
  imports: [NavbarComponent , FooterComponent , CommonModule],
  templateUrl: './modifier-formation.component.html',
  styleUrl: './modifier-formation.component.css'
})
export class ModifierFormationComponent {
  id ?: number;
  constructor( private route : ActivatedRoute, private router : Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
  }
}
