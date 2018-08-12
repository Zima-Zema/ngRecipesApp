import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  insertedIng:Ingredient;
  
  constructor() { }

  ngOnInit() {
  }
  onInsertIng(ing){
    this.insertedIng = ing;
  }

}
