import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from './../model/iproduct';

import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { FormationService } from '../service/formation.service';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [NavbarComponent , FooterComponent , CommonModule ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {  
  id : number;
  EnableFormation : boolean = true;
  constructor( private route : ActivatedRoute, private router : Router, private formation : FormationService , private user: ClientService) {
    this.id = this.route.snapshot.params['id'];
    const product = this.formation.getOne(this.id);
    if(product){
      this.product = product;
      this.EnableFormation = this.product.idCondidat.length > 15;
    }else{
      this.router.navigate(['/formation']);
    }
   }
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
  }

  product: Iproduct = {
    title: 'Angular',
    description: 'Angular is a platform for building mobile and desktop web applications.',
    image: 'https://picsum.photos/1000',
    hours: 10,
    date: "2024-05-07 14:01",
    program: 'https://angular.io/',
    difficulty: 'beginner',
    tags: ['angular', 'javascript', 'html', 'css'],
    categories: ['web', 'mobile', 'desktop'],
    idFormateur: [1, 3],
    idCondidat: [1, 2],
    id: 1
  };
  
  Auth = ()=>{
    return window.localStorage.getItem("accessToken") ? true : false;
  }

  getFormateurName (id : number){
    // this.user.getAll();
    return (this.user.getUserById(id)?.name)??"nom indisponible";
  }

  AddFormationToUser(){
    this.user.saveFormationToUser(Number(window.localStorage.getItem("id")),this.product.id);
    // this.formation.userAddFormation(Number(window.localStorage.getItem("id")),this.product.id);
  }

  UnAddFormationToUser(){
    this.user.unsavedFormationToUser(Number(window.localStorage.getItem("id")),this.product.id);
    // this.formation.userDeleteFormation(Number(window.localStorage.getItem("id")),this.product.id);
  }

  isSaved(): boolean{
    return this.user.checkIfFormationIsSaved(Number(window.localStorage.getItem("id")),this.product.id);
  }

}