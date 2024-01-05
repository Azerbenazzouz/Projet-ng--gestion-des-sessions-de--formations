import { Injectable } from '@angular/core';
import { FormationDTO } from '../model/formation-dto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Iproduct } from '../../shared/model/iproduct';
import { ClientService } from '../../shared/service/client.service';
import { FormationService } from '../../shared/service/formation.service';
@Injectable({
  providedIn: 'root'
})
export class FormationFService {
  private Mesformations : Iproduct[] = [];

  options = {headers : new HttpHeaders(
    {
      'content-type' : "application/json",
      'Authorization' : 'Bearer ' + localStorage.getItem('accessToken')
    }
  )}
  
  constructor(private http : HttpClient,private router:Router, private client : ClientService , private formation : FormationService) { }

  url : string = "http://localhost:3000/formation"; 

  addFormation = (formation : FormationDTO) => {
    this.http.post<FormationDTO>(this.url,formation,this.options).subscribe({  
      next : (result : FormationDTO) => {
        console.log(result);
        this.router.navigate(['/formateur/mesformations']);
      },
      error : (err : any) => {
        console.log(err);
      }
    });
  }

  getMesFormations(idFormateur : number): Observable<Iproduct[]> {
    return this.http.get(this.url).pipe(
      map((data : any) => {
        this.Mesformations = [];
        data.forEach((element : Iproduct) => {
          if(element.idFormateur.includes(idFormateur)){
            this.Mesformations.push(element);
          }
        });
        return [...this.Mesformations];
      })
    );
  }

  supprimerFormation(idFormation : number) : Observable<Iproduct> {
    let inscritIds:number[] =this.Mesformations.find(formation => formation.id == idFormation)?.idCondidat??[];

    inscritIds.forEach((id : number) => {
      this.client.unsavedFormationToUser(id,idFormation);
    });

    return this.http.delete(this.url + "/" + idFormation,this.options).pipe(
      map((data : any) => {
        return data;
      })
    );
  }
  
  editFormation(idFormation : number,formation : FormationDTO){
    this.http.put<FormationDTO>(this.url+ "/" + idFormation,formation,this.options).subscribe({  
      next : (result : FormationDTO) => {
        console.log(result);
        this.router.navigate(['/formateur/mesformations']);
      },
      error : (err : any) => {
        console.log(err);
      }
    });
  }
}
