import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-formation-inscrit',
  standalone: true,
  imports: [NavbarComponent,FooterComponent],
  templateUrl: './formation-inscrit.component.html',
  styleUrl: './formation-inscrit.component.css'
})
export class FormationInscritComponent {

}
