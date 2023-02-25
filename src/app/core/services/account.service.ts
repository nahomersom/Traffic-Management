import { Injectable } from '@angular/core';
import { map, Observable, ReplaySubject } from 'rxjs';
import { Account } from '../models/form-model/account';
import { Users } from '../models/form-model/users';
import { ApiService } from './api.service';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})

export class AccountService {
   private currentUserSource = new ReplaySubject<Users>(1);
   $currentUser:Observable<Users> = this.currentUserSource.asObservable();
  constructor(
  private apiService: ApiService,
  private tokenService:TokenService
  ) { 
    
  }
 login(activeUser:Account){
  return this.apiService.post('User/login',activeUser).pipe(map(user=>{
    if(user){
      this.tokenService.saveToken(user);
      this.currentUserSource.next(user);
    }
  }))
 } 

setCurrentUser(user){
  this.currentUserSource.next(user);
}

logout(){
  this.tokenService.destroyToken();
  this.currentUserSource.next(null);
}
}
