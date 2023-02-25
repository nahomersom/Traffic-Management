import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../../services/crud.service';
import { HelpersService } from '../../services/helpers.service';

@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.css']
})
export class PasswordRecoveryComponent implements OnInit {

  passwordRecoveryFormGroup:UntypedFormGroup;
  formSubmitted:boolean = false;
  constructor(private fb:UntypedFormBuilder,private crudService:CrudService,private helpersService:HelpersService, private router:Router) {

    this.passwordRecoveryFormGroup = fb.group({
      Email:['', [Validators.required]],
      clientURI:['http://localhost:4200/auth/reset-password']
     },
     {updateOn:'blur'}
     );
  }

  ngOnInit(): void {
  }
  getFormControl(formControlName){
    return this.passwordRecoveryFormGroup.get(formControlName);
  }


 onSubmit(){
  if(this.passwordRecoveryFormGroup.valid){
   this.crudService.submit({endpoint:'User/forgot-password',payload:this.passwordRecoveryFormGroup.value});
    //this.router.navigateByUrl('auth/login');
  }else{
    this.formSubmitted = true;
    this.helpersService.scrollToTheError(this.passwordRecoveryFormGroup)
  } 
 }

 onCancel(){

 }
}
