import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccidentComponent } from './accident.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routes:Routes = [
{
  path:'',
  component:AccidentComponent
}
];

@NgModule({
  declarations: [
    AccidentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class AccidentModule { }
