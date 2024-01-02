import { Injectable } from '@angular/core';
import { FormationDTO } from '../model/formation-dto';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormationFService {
  options = {headers : new HttpHeaders(
    {'content-type' : "application/json"}
  )}
  
  constructor(private http : HttpClient) { }

  url : string = "http://localhost:3000/formation"; 

  addFormation = (formation : FormationDTO) => {
    this.http.post<FormationDTO>(this.url,formation,this.options).subscribe({  
      next : (result : FormationDTO) => {
        console.log(result);
      },
      error : (err : any) => {
        console.log(err);
      }
    });
  }
  
}
