import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { map, Observable } from 'rxjs';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private accountService: AccountService,private toast: ToastrService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.accountService.$currentUser.pipe(map(user=>{
      console.log(route,'route data')
      let routeAction = route.data['action']; 
      let role =  user.roles.find(ele=>ele.page == route.data['page']);
     
      if(role && role[routeAction]){
    
      return true;
      }else{
     
        this.toast.error('You don\'t have access to this page');
        return false;
      }
    }));
  }
  
}
