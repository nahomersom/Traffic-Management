import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TrainingComponent } from './training.component';
const routes:Routes = [
  {
    path:'',
    component:TrainingComponent
  }
  ];


@NgModule({
  declarations: [TrainingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TrainingModule { }
