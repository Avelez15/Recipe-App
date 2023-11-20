import { ActionReducerMap } from '@ngrx/store';
import * as fromShoppingList from '../shopping-list/store/shopping-list.reducer';
import * as fromRecipes from '../recipes/store/recipe.reducer';

export interface AppState {
  shoppingList: fromShoppingList.State;
  recipes: fromRecipes.State;
}
