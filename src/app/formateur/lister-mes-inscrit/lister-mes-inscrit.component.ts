import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../../shared/model/client';
import { FormationFService } from '../service/formation-f.service';
import { ClientService } from '../../shared/service/client.service';

@Component({
  selector: 'app-lister-mes-inscrit',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,CommonModule],
  templateUrl: './lister-mes-inscrit.component.html',
  styleUrl: './lister-mes-inscrit.component.css'
})
export class ListerMesInscritComponent {
  id : number = 0;
  condidat : Client[] = []
  constructor(private route : ActivatedRoute, private router : Router , private formationF : FormationFService , private ClientService : ClientService){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    if(!this.id){
      this.router.navigate(['/formateur/mesformations']);
    }

    this.formationF.getAllCondidat(Number(this.id)).subscribe({
      next : (data : number[]) => {
        this.ClientService.getUsersByIds(data).subscribe({
          next : (data : Client[]) => {
            this.condidat = data;
            console.log(this.condidat);
          }
        })
      }
    })
  }
}
