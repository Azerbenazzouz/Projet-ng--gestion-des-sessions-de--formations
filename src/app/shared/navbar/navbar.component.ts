import { Component, Output , EventEmitter } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormControl , FormGroup , ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule , CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  motCles : string[] = ["angular","javascript","html","css","azer"];
  
  isAuth : boolean = false;
  role : string = "";

  constructor( private route : Router ) {}
  searchForm = new FormGroup({
    search: new FormControl('')
  });

  ngOnInit(): void {
    if(localStorage.getItem('accessToken')) {
      this.isAuth = true;
      this.role = localStorage.getItem('role')??'';

    }
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
    this.route.navigate(['/login']);
  }


}
