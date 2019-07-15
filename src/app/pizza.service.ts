import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Pizza } from './pizza/pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  uri='http://localhost:4000/pizza';
  pizzas:Pizza[]=[];

  constructor(private http:HttpClient) { }
  getPizzas():Observable<Pizza[]>{
    return this.http.get<Pizza[]>(`${this.uri}`+'/pizzas'); 
   }
   
   public addToCart(pizza){
    this.pizzas.push(pizza);
  }
  getCartPizzas():Observable<Pizza[]> {
    console.log("Pizza Cart Get");
    return of (this.pizzas);
  }

  deleteFromCart(pizzaId){
    this.pizzas.pop();
  }
}
