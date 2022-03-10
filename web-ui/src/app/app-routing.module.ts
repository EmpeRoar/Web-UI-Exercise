import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimeComponent } from './layout/prime/prime.component';

const routes: Routes = [
  {
    path: '',
    component: PrimeComponent,
    loadChildren: () => import(`../app/feature/customer/customer.module`)
      .then(x => x.CustomerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
