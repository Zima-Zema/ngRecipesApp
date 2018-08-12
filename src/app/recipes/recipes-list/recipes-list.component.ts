import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {


  recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('A test recipe', 'Donec id elit non mi porta gravida at eget metus.', 'https://cdn.pixabay.com/photo/2015/12/20/17/11/fish-1101436_960_720.jpg'),
    // tslint:disable-next-line:max-line-length
    new Recipe('A test recipe', 'Donec id elit non mi porta gravida at bloody metus.', 'https://cdn.pixabay.com/photo/2015/12/20/17/11/fish-1101436_960_720.jpg')

  ];
  @Output() theSelectedRcipe = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }
  onSelectedRecipe(recipe) {
    console.log("recipe", recipe);
    this.theSelectedRcipe.emit(recipe);

  }

}
