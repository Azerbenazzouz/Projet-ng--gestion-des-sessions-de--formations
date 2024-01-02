import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FormationService } from './formation.service';
import { Client } from '../model/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private users: Client[] = [];

  options = {headers : new HttpHeaders(
    {'content-type' : "application/json"}
  )}

  url : string = "http://localhost:3000/client";

  constructor(private http : HttpClient, private formation : FormationService) { 
    this.http.get<Client[]>(this.url,this.options).subscribe({
      next : (data : any) =>{
        this.users = [];
        data.forEach((element : Client) => {
          this.users.push(element);
        });
      }
    })
  }

  addClient(client : Client) : Observable<Client>{
    return this.http.post<Client>(this.url,client,this.options);
  }
  
  getClientById(id : number) : Client | undefined{
    return this.users.find(user => user.id == id);
  }

  getUSerById2(id : number) : Observable<Client|undefined>{
    return this.http.get(this.url).pipe(
      map((data : any) => {
        this.users = [];
        data.forEach((element : Client) => {
          this.users.push(element);
        });
        return this.users.find(user => user.id == id);
      })
    );
  }

  getUserById (id : number): Client | undefined{
    return this.users.find(user => user.id == id);
  }

  getAllSavedFormationId(id : number) :  number[] | undefined{
    let user = this.getUserById(id);
    if(!user){
      return undefined;
    }else{
      return user.idSavedFormation;
    }
  }

  checkIfFormationIsSaved(idUser : number, idFormation : number) : boolean{
    let idSavedFormation = this.getAllSavedFormationId(idUser);
    if(idSavedFormation){
      return idSavedFormation.includes(idFormation);
    }else{
      return false;
    }
  }

  saveFormationToUser(idUser : number, idFormation : number){
  this.getUSerById2(idUser).subscribe((data : Client|undefined) => {
      let idSavedFormation = data?.idSavedFormation?? [];
      if(!this.checkIfFormationIsSaved(idUser,idFormation)){
        idSavedFormation.push(idFormation);
      }
      if(data){
        let u : Client = {
          name : data.name,
          telephone : data.telephone,
          email : data.email,
          role : data.role,
          img : data.img,
          idSavedFormation : idSavedFormation,
          id : data.id
        }
        this.http.put(this.url + '/' + idUser, u, this.options).subscribe({
          next : (data : any) =>{
            // console.log(data);
            this.formation.userAddFormation(idUser,idFormation)
          }
        })
      }
    });
  }

  unsavedFormationToUser(idUser : number, idFormation : number){
    this.getUSerById2(idUser).subscribe((data : Client|undefined) => {
      let idSavedFormation = data?.idSavedFormation?? [];
      if(this.checkIfFormationIsSaved(idUser,idFormation)){
        idSavedFormation.splice(idSavedFormation.indexOf(idFormation),1);
      }
      if(data){
        let u : Client = {
          name : data.name,
          telephone : data.telephone,
          email : data.email,
          role : data.role,
          img : data.img,
          idSavedFormation : idSavedFormation,
          id : data.id
        }
        this.http.put(this.url + '/' + idUser, u, this.options).subscribe({
          next : (data : any) =>{
            // console.log(data);
            this.formation.userDeleteFormation(idUser,idFormation)
          }
        })
      }
    });
  }
}
