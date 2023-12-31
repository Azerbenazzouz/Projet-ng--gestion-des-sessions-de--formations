import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../model/iuser';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FormationService } from './formation.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: IUser[] = [];

  options = {headers : new HttpHeaders(
    {'content-type' : "application/json"}
  )}
  


  
  url : string = "http://localhost:3000/users";

  constructor(private http : HttpClient , private formation : FormationService) { 
    this.http.get<IUser[]>(this.url,this.options).subscribe({
      next : (data : any) =>{
        // console.log(data)
        // this.users = [...data];
        this.users = [];
        data.forEach((element : IUser) => {
          this.users.push(element);
        });
      }
    })
  }

  // getByIds (idList : number[] | undefined): Observable<Iproduct[]>{
  //   return this.http.get(this.url).pipe(
  //     map((data : any) => {
  //       this.formations = [];
  //       data.forEach((element : Iproduct) => {
  //         this.formations.push(element);
  //       });
  //       if(idList){
  //         return [...this.formations.filter(formation => idList.includes(formation.id))];
  //       }else{
  //         return [];
  //       }
  //     })
  //   );
  // }

  getUSerById2(id : number) : Observable<IUser|undefined>{
    return this.http.get(this.url).pipe(
      map((data : any) => {
        this.users = [];
        data.forEach((element : IUser) => {
          this.users.push(element);
        });
        return this.users.find(user => user.id == id);
      })
    );
  }

  getUserById (id : number): IUser | undefined{
    // console.log(this.users.filter(user => user.id == id)[0])
    return this.users.find(user => user.id == id);
  }

  getAllSavedFormationId(id : number) :  number[] | undefined{
    let user = this.getUserById(id);
    console.log(user)
    if(!user){
      return undefined;
    }else{
      console.log(user.idSavedFormation)
      return user.idSavedFormation;
    }
  }

  saveFormationToUser(idUser : number, idFormation : number){
    let idSavedFormation = this.getAllSavedFormationId(idUser)?? [];
    if(idSavedFormation){
      if(!idSavedFormation.includes(idFormation)){
        idSavedFormation.push(idFormation);
      }
    }

    this.http.put(this.url + '/' + idUser, {
      "idSavedFormation":idSavedFormation
    }, this.options).subscribe({
      next : (data : any) =>{
        console.log(data);
      this.formation.userAddFormation(idUser,idFormation);

      }
    })
  }

}
