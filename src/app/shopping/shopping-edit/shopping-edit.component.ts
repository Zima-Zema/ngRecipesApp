import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() insertedIng = new EventEmitter<Ingredient>();
  @ViewChild('nameInput') nameRef:ElementRef;
  @ViewChild('amountInput') amountRef:ElementRef;
  constructor() { }

  ngOnInit() {
  }
  onAdd(){
    let ing = new Ingredient(this.nameRef.nativeElement.value,this.amountRef.nativeElement.value);
    this.insertedIng.emit(ing);
  }
}
