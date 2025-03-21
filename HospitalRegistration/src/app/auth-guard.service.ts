import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

export interface IDeactivate{
canExit:()=>boolean
}
@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate,CanDeactivate<IDeactivate> {

  constructor(private authService:AuthService,private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let result=this.authService.getAuthDetails();
    if(result=="true"){
      return true;
    }else {
      this.router.navigate(['/']);
      return false;
    }
  }
  canDeactivate(component: IDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): boolean {
    return component.canExit?component.canExit():true;
   }
 
}
