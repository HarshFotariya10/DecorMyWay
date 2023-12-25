import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';

import { SalesComponent } from './Pages/sales/sales.component';
import { FurnitureComponent } from './Pages/Product/furniture/furniture.component';
import { AboutusComponent } from './Pages/aboutus/aboutus.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'furniture',
    component:FurnitureComponent
  },
  {
    path:'about',
    component:AboutusComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
