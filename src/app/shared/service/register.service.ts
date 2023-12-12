import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { RegisterDTO } from '../model/register-dto';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  options = {headers : new HttpHeaders(
    {'content-type' : "application/json"}
  )}
  url : string = "http://localhost:3000/users/signup";
  
  constructor(private http : HttpClient, private router:Router) { }
  // fama mochkla f HttpClient fi constructor 
  register = (nom : string , telephone : string , email : string , password : string , role : string)=>{
    this.http.post<RegisterDTO>(this.url , 
      { nom , 
        telephone , 
        email , 
        password , 
        role
      } , this.options
    ).subscribe(
      result => {
        console.log(result);
        // window.localStorage.setItem('accessToken', result.accessToken);
        this.router.navigate(['login']);
      }
    )
    console.log(nom , telephone , email , password , role);
  }

}
