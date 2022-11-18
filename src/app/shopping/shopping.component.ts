import { Component } from '@angular/core';
import { Item } from '../models/item';
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent {
  message : string = "Hello There";
  place : string = "New York";
  check : boolean = true;

  constructor(private logger : LoggerService){}

  shoppingList : Item[] = [
    {
      itemName : 'Apple',
      cost : 0.4
    },
    {
      itemName : 'Milk',
      cost : 2
    }
  ]

  printName(){
    this.logger.log("I am using the logger service");
    alert("Hello There");
  }

  toggleDisplayText(){
    this.logger.error("Be careful!");
    this.check = !this.check;
  }
}
