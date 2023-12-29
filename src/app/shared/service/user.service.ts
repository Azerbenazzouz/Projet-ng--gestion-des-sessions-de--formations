import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../model/iuser';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users : IUser[] = [];

  options = {headers : new HttpHeaders(
    {'content-type' : "application/json"}
  )}
  
  constructor(private http : HttpClient) { 
    this.http.get<IUser[]>(this.url,this.options).subscribe({
      next : (data : any) =>{
        this.users = [];
        data.forEach((element : IUser) => {
          this.users.push(element);
        });
      }
    })
  }

  url : string = "http://localhost:3000/users";

  getUserById (id : number): IUser | undefined{
    return this.users.find(user => user.id == id);
  }

  getAllSavedFormationId(id : number) :  number[] | undefined{
    let user = this.getUserById(id);
    console.log(user)
    if(!user){
      return undefined;
    }else{
      return user.idSavedFormation;
    }
  }
}
