import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Ingredient } from '../../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnChanges {
  @Input() newIng: Ingredient;

  ingredients: Ingredient[] = [
    new Ingredient('apples', 5),
    new Ingredient('tomatos', 3)
  ];
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
    if (this.newIng) {
      this.ingredients.push(this.newIng);      
    }
  }

}
