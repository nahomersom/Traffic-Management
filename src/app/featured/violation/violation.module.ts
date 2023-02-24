import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViolationComponent } from './violation.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  {
    path:'',
    component:ViolationComponent
  }
  ];
  

@NgModule({
  declarations: [

    ViolationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ViolationModule { }
