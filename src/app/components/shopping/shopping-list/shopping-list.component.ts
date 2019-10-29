import { Component, OnInit } from '@angular/core';
import { Ingridients } from '../../../shared/ingridients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingridients:Ingridients[] = [
    new Ingridients('Mangoes', 7),
    new Ingridients('Organges', 10),
    new Ingridients('Nyanya Chungu', 12),
    new Ingridients('Malimau', 19),
    new Ingridients('Bamia', 23),
    
  ];

  constructor() { }

  ngOnInit() {
  }

}
