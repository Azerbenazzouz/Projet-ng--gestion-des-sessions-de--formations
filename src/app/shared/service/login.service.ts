import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDto } from '../model/login-dto';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  options = {headers : new HttpHeaders(
    {'content-type' : "application/json"}
  )}
  
  constructor(private http : HttpClient, private router:Router) { }

  url : string = "http://localhost:3000/login";

  login = (email : string , password : string): Promise<LoginDto> => {
    return new Promise((resolve, reject) => {
      this.http.post<LoginDto>(this.url , 
        { email , 
          password 
        }, this.options).subscribe({
        next : (result : LoginDto) => {
          if(result.accessToken){
            localStorage.setItem('accessToken',result.accessToken);
            localStorage.setItem('role',result.user.role);
            localStorage.setItem('id',result.user.id.toString());
            this.router.navigateByUrl('/home');
            this.router.navigate(['home']);
            resolve(result);
          }else{
            reject("Email ou mot de passe incorrect");
          }
        },
        error : (err : any) => {
          reject(err);
        }
      });
    });
  }

  isAuthenticated = () : boolean => {
    return localStorage.getItem('accessToken') != null;
  }

}
