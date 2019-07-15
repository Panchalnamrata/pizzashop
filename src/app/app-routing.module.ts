import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PizzaGetComponent } from './pizza/pizza-get/pizza-get.component';
import { CartComponent } from './pizza/cart/cart.component';
import { PizzaDeleteComponent } from './pizza/pizza-delete/pizza-delete.component';

const routes: Routes = [
   {path:'pizza/',component:PizzaGetComponent},
   { path: 'cart', component: CartComponent },
   {path: 'cart/delete', component: PizzaDeleteComponent},
   {path: 'pizza/cart', component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
