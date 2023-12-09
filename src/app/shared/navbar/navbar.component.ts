import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormControl , FormGroup , ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor( private route : Router ) {}
  searchForm = new FormGroup({
    search: new FormControl('')
  });

  ngOnInit(): void {}

  searchSubmit() {
    console.log('Please enter a search term');
    
    if(this.searchForm.value.search == '') {
      this.route.navigate(['/formation']);
    }else {
      this.route.navigate(['/formation/',this.searchForm.value.search]);
    }
  }
}
