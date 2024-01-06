import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormControl , FormGroup , ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormationService } from '../service/formation.service';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule , CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  motCles? : string[] ;
  profileImg? : string = "https://github.com/mdo.png";
  isAuth : boolean = false;
  role : string = "";
  id : number = 0;
  constructor( private route : Router ,private formation : FormationService,private clientService : ClientService) {}
  searchForm = new FormGroup({
    search: new FormControl('')
  });

  ngOnInit(): void {
    if(localStorage.getItem('accessToken')) {
      this.isAuth = true;
      this.role = localStorage.getItem('role')??'';
      this.id = Number(localStorage.getItem('id'));
      this.clientService.getProfileImg(this.id.toString()).subscribe((data : any) => {
        if(data != null) this.profileImg = data;
      });
    }
    this.formation.getAllTags().subscribe( (data : any) => {
      this.motCles = data;
    }
    );
  }
  
  searchSubmit() {    
    if(this.searchForm.value.search == '') {
      this.route.navigate(['/formation']);
    }else {
      this.route.navigate(['/formation/',this.searchForm.value.search]);
    }
  }

  logout() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('role');
    localStorage.removeItem('id');
    this.route.navigate(['/login']);
  }


}
