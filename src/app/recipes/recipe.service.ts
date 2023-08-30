import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Millionaire Spaghetti',
      'This is the description',
      'https://www.southernliving.com/thmb/jM1YjcVqzkt-Ej6pMp7qK--c_9Q=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Millionaire_Spaghetti_019-34e9c04b1ae8405088f53450a048e413.jpg',
      [
        new Ingredient('meat', 2),
        new Ingredient('spaghetti', 1),
        new Ingredient('onion', 1),
        new Ingredient('garlic', 1),
        new Ingredient('marinara', 1),
        new Ingredient('butter', 1 / 4),
        new Ingredient('cream cheese', 1),
        new Ingredient('ricotta cheese', 1),
        new Ingredient('parmesan cheese', 1),
        new Ingredient('Mozzarella cheese', 1),
        new Ingredient('parsley', 1),
      ]
    ),
    new Recipe(
      'Slammin Burger',
      'A real tasty burger that will leave you wanting more!',
      'https://i0.wp.com/www.aspicyperspective.com/wp-content/uploads/2020/05/Best-Hamburger-Patty-Recipe-14.jpg?resize=1132%2C1536&ssl=1',
      [
        new Ingredient('ground chuck', 1),
        new Ingredient('crushed crackers', 1),
        new Ingredient('Worcestershire sauce', 1),
        new Ingredient('egg', 1),
        new Ingredient('milk', 1),
        new Ingredient('seasoning', 1),
        new Ingredient('buns', 2),
        new Ingredient('onions', 1),
        new Ingredient('tomato', 2),
        new Ingredient('lettuce', 1),
        new Ingredient('mayo', 1),
        new Ingredient('ketchup', 1),
      ]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipe() {
    return this.recipes.slice(); //this will return a new array, which is an exact copy of this file. This prevents access to this array from outside, meaning we can only get this copy.
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
