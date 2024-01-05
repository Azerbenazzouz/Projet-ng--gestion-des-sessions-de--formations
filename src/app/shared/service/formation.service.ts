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

  getOne2 (id : number): Observable<Iproduct>{
    return this.http.get(this.url + '/' + id).pipe(
      map((data : any) => {
        return data;
      })
    );
  }

  getByIds (idList : number[] | undefined): Observable<Iproduct[]>{
    return this.http.get(this.url).pipe(
      map((data : any) => {
        this.formations = [];
        data.forEach((element : Iproduct) => {
          this.formations.push(element);
        });
        if(idList){
          return [...this.formations.filter(formation => idList.includes(formation.id))];
        }else{
          return [];
        }
      })
    );
  }

  userAddFormation (id : number, idFormation : number){
    console.log(idFormation)
    let formation = this.getOne(idFormation);

    if(!formation?.idCondidat.includes(id)){
      formation?.idCondidat.push(id);
    }

    this.http.put(this.url + '/' + idFormation, formation, this.options).subscribe({
      next : (data : any) =>{
        console.log(data)
      }
    })
  }
  userDeleteFormation (id : number, idFormation : number){
    console.log(idFormation)
    let formation = this.getOne(idFormation);

    if(formation?.idCondidat.includes(id)){
      formation?.idCondidat.splice(formation?.idCondidat.indexOf(id),1);
    }

    this.http.put(this.url + '/' + idFormation, formation, this.options).subscribe({
      next : (data : any) =>{
        console.log(data)
      }
    })
  }

  getAllTags(): Observable<string[]>{
    return this.http.get(this.url).pipe(
      map((data : any) => {
        let tags : string[] = [];
        data.forEach((element : Iproduct) => {
          element.tags.forEach(tag => {
            if(!tags.includes(tag)){
              tags.push(tag);
            }
          });
        });
        return tags;
      })
    );
  }
}
