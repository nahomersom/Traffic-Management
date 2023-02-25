import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../../services/crud.service';
import { HelpersService } from '../../services/helpers.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  ResetPasswordFormGroup:FormGroup;
  formSubmitted:boolean = false;
  token:string;
  email:string;
  ConfrmpasswordError:boolean = false;
  @ViewChild("ConfirmPassword") ConfirmPassword: ElementRef;
  constructor(private fb:FormBuilder,private crudService:CrudService,private helpersService:HelpersService, private router:Router,private activatedRoute:ActivatedRoute) {
    this.token=this.activatedRoute.snapshot.queryParams['token'];
    this.email=this.activatedRoute.snapshot.queryParams['email'];
    

    this.ResetPasswordFormGroup = fb.group({
      Email:[ this.email],
      password:['',Validators.required],
      token:[this.token]
     },
     {updateOn:'blur'}
     );
  }

  ngOnInit(): void {
  }
  getFormControl(formControlName){
    return this.ResetPasswordFormGroup.get(formControlName);
  }
 onSubmit(value:string){
  if(this.ResetPasswordFormGroup.valid){
    if(this.ResetPasswordFormGroup.get('password').value==value){
      this.ConfrmpasswordError=false;
      this.crudService.submit({endpoint:'User/reset-password',payload:this.ResetPasswordFormGroup.value});
     
    }else{
      this.ConfrmpasswordError=true;
    }
  }
  else{
    this.formSubmitted = true;
    this.helpersService.scrollToTheError(this.ResetPasswordFormGroup)
  } 
 }
 onCancel(){
  console.log("cancel");
 this.router.navigateByUrl('auth/login');
 }
}
