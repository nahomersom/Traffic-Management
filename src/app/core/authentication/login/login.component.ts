import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from '../../models/account';
import { AccountService } from '../../services/account.service';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private accountService:AccountService,private router:Router,private tokenService:TokenService) {
    this.setCurrentUser();
   }
  ngOnInit(): void {
  }
  login(user:Account){
    this.accountService.login(user).subscribe({
      next:(res)=>{
        this.router.navigateByUrl('');
      }
    }
    );
  }
  setCurrentUser(){
    let user = this.tokenService.getToken();
    if(user){
      this.router.navigateByUrl('');
    }
   
  }

}
