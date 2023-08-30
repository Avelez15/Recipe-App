import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];

  constructor(
    name: string,
    desc: String,
    imagePath: string,
    ingredients: Ingredient[]
  ) {
    this.name = name;
    this.description = this.description;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}
