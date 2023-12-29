import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../model/iuser';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: IUser[] = [
    {
      "email": "benazzouzazera@gmail.com",
      "password": "$2a$10$8ndebxsxihg6d89d7zSyte7WQxTntRG09ErfaN58LA36y5cuygjRO",
      "name": "Azer Ben Azzouz",
      "telephone": "56793609",
      "role": "formateur",
      "id": 1,
      "idSavedFormation":[1,2,3]
    }
  ];

  options = {headers : new HttpHeaders(
    {'content-type' : "application/json"}
  )}
  


  
  url : string = "http://localhost:3000/users";

  constructor(private http : HttpClient) { 
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



  getUserById (id : number): IUser | undefined{
    // console.log(this.users.filter(user => user.id == id)[0])
    return this.users.find(user => user.id == id);
  }

  getAllSavedFormationId(id : number) :  number[] | undefined{
    // console.log(this.users.length)
    let user = this.getUserById(id);
    console.log(user)
    if(!user){
      return undefined;
    }else{
      console.log(user.idSavedFormation)
      return user.idSavedFormation;
    }
  }
}
