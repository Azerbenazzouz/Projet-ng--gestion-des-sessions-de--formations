import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute , Router, RouterLink } from '@angular/router';
import { Client } from '../model/client';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FooterComponent,NavbarComponent,CommonModule,RouterLink],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  client? : Client;
  id? : number;

  constructor(private route : ActivatedRoute, private router : Router ,private clientServes : ClientService) {}

  ngOnInit(): void {
    this.id = Number(localStorage.getItem("id"));

    this.clientServes.getUSerById2(this.id).subscribe({
      next : (data : any) => {
        this.client = data;
        console.log(this.client);
      }
    })
    
  }
}
