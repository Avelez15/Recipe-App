import { createAction, props } from '@ngrx/store';
import { Recipe } from '../recipe.model';

export const addRecipe = createAction(
  '[Recipe] Add Recipe',
  props<{ recipe: Recipe }>()
);

export const updateRecipe = createAction(
  '[Recipe] Update Recipe',
  props<{ recipe: Recipe; index: number }>()
);

export const deleteRecipe = createAction(
  '[Recipe] Delete Recipe',
  props<{ index: number }>()
);

export const setRecipes = createAction(
  '[Recipe] Set Recipe',
  props<{ index: number }>()
);
