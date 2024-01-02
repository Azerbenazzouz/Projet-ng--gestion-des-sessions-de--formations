import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { RegisterDTO } from '../model/register-dto';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ClientService } from './client.service';
import { IUser } from './../model/iuser';
import { ILogin } from '../model/ilogin';
import { LoginDto } from '../model/login-dto';
import { Client } from '../model/client';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  options = {headers : new HttpHeaders(
    {'content-type' : "application/json"}
  )}
  
  url : string = "http://localhost:3000/users/signup";
  
  constructor(private http : HttpClient, private router:Router,private client : ClientService) { }

  // valideEmail = async(email : string)=>{
  //   let res: boolean = true;
    
  //   await this.http.get("http://localhost:3000/users?email="+ email , this.options).subscribe({
  //     next : (result : any) => {
  //       if(result.length != 0){
  //         res =  false;
  //         return res;
  //       }
  //       console.log(result.length);
  //       console.log(res);
  //     }
  //   });
  //   console.log(res);

  //   return res;

  // }
  // valideEmail check if the email is already used or not and return a boolean If any error occured, it will be catched by the catchError operator and the error will be thrown
  valideEmail = (email : string) => {
    let res: boolean = true;
  
    return this.http.get("http://localhost:3000/users?email="+ email , this.options).pipe(
      catchError(err => {
        console.error('Une erreur est survenue lors de la validation de l\'email', err);
        return throwError(err);
      })
    ).toPromise().then((result : any) => {
      if(result.length != 0){
        res =  false;
      }
      return res;
    });
  }

  // register will send a POST request to the server to register a new user.
  register = (name : string , telephone : string , email : string , password : string , role : string)=>{
    this.http.post<RegisterDTO>(this.url , 
      { name , 
        telephone , 
        email , 
        password , 
        role
      } , this.options
    ).subscribe({
      next :
        (result : RegisterDTO) => {

          this.client.addClient(result.user).subscribe({
            next : (result : Client) => {
              // console.log(result);
            }
          });
          // window.localStorage.setItem('accessToken', result.accessToken);
          this.router.navigate(['login']);
        }
      });
  }

  

}
