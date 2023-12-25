import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formation-inscrit',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,CommonModule],
  templateUrl: './formation-inscrit.component.html',
  styleUrl: './formation-inscrit.component.css'
})
export class FormationInscritComponent {
  formations : any[] = [];
}
