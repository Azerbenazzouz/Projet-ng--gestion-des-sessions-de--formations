import { Component } from '@angular/core';
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
  isAuth : boolean = false;
  constructor( private route : Router ) {}
  searchForm = new FormGroup({
    search: new FormControl('')
  });

  ngOnInit(): void {
    if(localStorage.getItem('accessToken')) {
      this.isAuth = true;
    }
  }

  searchSubmit() {
    console.log('Please enter a search term');
    
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

  role() {
    return localStorage.getItem('role');
  }

  // isAuth() {
  //   return localStorage.getItem('accessToken');
  // }
}
