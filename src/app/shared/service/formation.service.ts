import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iproduct } from '../model/iproduct';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormationService {
  private formations : Iproduct[] = [];

  options = {headers : new HttpHeaders(
    {'content-type' : "application/json"}
  )}
  constructor(private http : HttpClient) { 
    this.getAll ()
  }

  url : string = "http://localhost:3000/formation";

  // NOTE: La méthode subscribe est utilisée pour s'abonner à un Observable, pas à un tableau.
  getAll (): Observable<Iproduct[]>{
    return this.http.get(this.url).pipe(
      map((data : any) => {
        this.formations = [];
        data.forEach((element : Iproduct) => {
          this.formations.push(element);
        });
        return [...this.formations];
      })
    );
  }

  getOne (id : number): Iproduct | undefined{
    return this.formations.find(formation => formation.id == id);
  }

  getByIds(idList : number[] | undefined):Iproduct[] | undefined{
    let matchingFormations : Iproduct[] | undefined;
    if(idList){
       matchingFormations = this.formations.filter(formation => idList.includes(formation.id))
      if(matchingFormations.length == 0) return undefined;
    }
    return matchingFormations;
  }

}
