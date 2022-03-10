import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeComponent } from './prime.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PrimeComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PrimeComponent
  ]
})
export class PrimeModule { }
