import { createReducer, on } from '@ngrx/store';
import { Ingredient } from '../../shared/ingredient.model';
import * as ShoppingListActions from './shopping-list.actions';

export interface State {
  ingredients: Ingredient[];
  editIndex: Number;
}

const initialState: State = {
  ingredients: [new Ingredient('Apples', 5), new Ingredient('Tomatoes', 10)],
  editIndex: -1,
};

export const shoppingListReducer = createReducer(
  initialState,
  on(ShoppingListActions.addIngredient, (state, action) => ({
    ...state,
    ingredients: [...state.ingredients, action.ingredient],
  })),
  on(ShoppingListActions.addIngredients, (state, action) => ({
    ...state,
    ingredients: [...state.ingredients, action.ingredients],
  })),
  on(ShoppingListActions.updateIngredient, (state, action) => ({
    ...state,
    editIndex: -1,
    ingredients: state.ingredients.map((ingredient, index) =>
      index === state.editIndex ? { ...action.ingredient } : ingredient
    ),
  }))
);
