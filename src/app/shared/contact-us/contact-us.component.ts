import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [FooterComponent,NavbarComponent,CommonModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

}
