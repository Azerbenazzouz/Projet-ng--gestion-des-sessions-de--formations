import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iproduct } from '../model/iproduct';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormationService {
  private formation : Iproduct[] = [];
  options = {headers : new HttpHeaders(
    {'content-type' : "application/json"}
  )}
  constructor(private http : HttpClient) { }

  url : string = "http://localhost:3000/formation";

  // NOTE: La méthode subscribe est utilisée pour s'abonner à un Observable, pas à un tableau.
  getAll (): Observable<Iproduct[]>{
    return this.http.get(this.url).pipe(
      map((data : any) => {
        this.formation = [];
        data.forEach((element : any) => {
          this.formation.push(element);
        });
        return [...this.formation];
      })
    );
  }

  getOne (id : number): Iproduct | undefined{
    this.getAll();
    return this.formation.find(formation => formation.id == id);
  }


}
