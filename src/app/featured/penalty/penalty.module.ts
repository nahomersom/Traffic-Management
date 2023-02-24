import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PenaltyComponent } from './penalty.component';
import { RouterModule, Routes } from '@angular/router';
const routes:Routes = [
  {
    path:'',
    component:PenaltyComponent
  }
  ];
  


@NgModule({
  declarations: [
    PenaltyComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PenaltyModule { }
