import { createAction, props } from '@ngrx/store';
import { Ingredient } from 'src/app/shared/ingredient.model';

export const addIngredient = createAction(
  '[Shopping List] Add Ingredient',
  props<{ ingredient: Ingredient }>()
);

export const addIngredients = createAction(
  '[shopping List] Add Ingredients',
  props<{ ingredients: Ingredient }>()
);

export const updateIngredient = createAction(
  '[Shopping List] Update Ingredient',
  props<{ ingredient: Ingredient }>()
);
