import { Component, OnInit } from '@angular/core';
import { Pizza } from '../pizza';
import { ActivatedRoute } from '@angular/router';
import { PizzaService } from 'src/app/pizza.service';

@Component({
  selector: 'app-pizza-delete',
  templateUrl: './pizza-delete.component.html',
  styleUrls: ['./pizza-delete.component.css']
})
export class PizzaDeleteComponent implements OnInit {
  pizza:Pizza[];
  constructor(private route:ActivatedRoute, private cartService:PizzaService) { }

  ngOnInit() {
    let pizzaId=+this.route.snapshot.paramMap.get("pizzaId");
    this.deletePizza(pizzaId);
  }
  deletePizza(pizzaId)
  {
    this.cartService.deleteFromCart(pizzaId);
      this.cartService.getCartPizzas().subscribe(p=>{
        console.log(p);
      this.pizza=p;
  });

}
}
