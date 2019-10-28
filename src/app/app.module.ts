import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ShoppingListEditComponent } from './components/shopping/shopping-list-edit/shopping-list-edit.component';
import { ShoppingListComponent } from './components/shopping/shopping-list/shopping-list.component';
import { RecipeList } from './components/recipe/recipe-list/recipe-list.component';
import { RecipeItem } from './components/recipe/recipe-item/recipe-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListEditComponent,
    ShoppingListComponent,
    RecipeList,
    RecipeItem
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
