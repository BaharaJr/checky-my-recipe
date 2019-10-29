import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeList implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "Mambuta ya Bibi",
      "Mambuta ya bibi tangu siku ya kwanza",
      "assets/nick-bratanek-R0lEYv-K8os-unsplash.jpg"
    )
  ];

  constructor() {}

  ngOnInit() {}
}
