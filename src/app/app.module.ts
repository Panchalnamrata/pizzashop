import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { PizzaGetComponent } from './pizza/pizza-get/pizza-get.component';
import { PizzaAddComponent } from './pizza/pizza-add/pizza-add.component';
import { PizzaDeleteComponent } from './pizza/pizza-delete/pizza-delete.component';
import { PizzaEditComponent } from './pizza/pizza-edit/pizza-edit.component';
import { CartComponent } from './pizza/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    PizzaGetComponent,
    PizzaAddComponent,
    PizzaDeleteComponent,
    PizzaEditComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
