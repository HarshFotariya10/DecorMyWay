import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';

import { SalesComponent } from './Pages/sales/sales.component';

const routes: Routes = [
  {
    path:'products',
    component:HomeComponent
  },
  {
    path:'sales',
    component:SalesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
