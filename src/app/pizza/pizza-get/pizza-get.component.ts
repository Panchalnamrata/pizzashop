import { Component, OnInit, Input } from '@angular/core';
import { Pizza } from '../pizza';
import { PizzaService } from 'src/app/pizza.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-pizza-get',
  templateUrl: './pizza-get.component.html',
  styleUrls: ['./pizza-get.component.css']
})
export class PizzaGetComponent implements OnInit {
  @Input()
  pizza:Pizza;
  pageTitle="Pizza Shop"
  pizzas:Pizza[]=[];
  constructor(private route:ActivatedRoute,private service:PizzaService) { }

  ngOnInit() {
    this.service.getPizzas().subscribe(pizzasList=>this.pizzas=pizzasList);
  }

  addToCart(pizza) {
    window.alert('Your pizza has been added to the cart!');
    this.service.addToCart(pizza);
    console.log("DONE");
  }
}
