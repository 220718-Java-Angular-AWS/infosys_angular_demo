import { Component } from '@angular/core';
import { Item } from '../models/item';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent {
  message : string = "Hello There";
  place : string = "New York";
  check : boolean = true;

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
    alert("Hello There");
  }

  toggleDisplayText(){
    this.check = !this.check;
  }
}
