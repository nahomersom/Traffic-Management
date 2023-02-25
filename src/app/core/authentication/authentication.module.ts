import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {RouterModule, Routes} from '@angular/router';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
const routes : Routes = [
  {
  path:'login',
  component:LoginComponent,
  },
  {
    path: 'password-recovery',
    component: PasswordRecoveryComponent
  },
  {
    path:'reset-password',
    component:ResetPasswordComponent
  },



];

@NgModule({
  declarations: [
    LoginComponent,
    PasswordRecoveryComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthenticationModule { }
