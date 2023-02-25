import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  getToken(){
    return JSON.parse(window.localStorage.getItem('user'));
    
  }
  
  saveToken(user){
    return window.localStorage['user'] = JSON.stringify(user);
  }

  destroyToken(){
    return window.localStorage.removeItem('user');
  }
}
