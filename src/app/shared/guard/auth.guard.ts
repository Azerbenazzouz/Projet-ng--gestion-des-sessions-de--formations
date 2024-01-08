import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  // const loginService = inject(LoginService);
  // const router = inject(Router);
  // console.log(loginService.isAuthenticated());
  // // if(loginService.isAuthenticated()){
  // //   return true;
  // // }else{
  // //   router.navigate(['login']);
  // //   return false;
  // // }
  // return true;
  // const loginService = inject(LoginService);
  // const router = inject(Router);
  // console.log(!loginService.isAuthenticated());
  // if(loginService.isAuthenticated()){
  //   router.navigate(['']);
  // }else{
  //   return true;
  // }
  return false;
};

