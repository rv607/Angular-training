import {Injectable} from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{

    private recipes : Recipe[] = [
        new Recipe("Tasty Schnitzel",
        "This simply a test",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBlIAeL3h0ZXldD7Zqsu5qVv5aPsaVjY5Hd4cPUcaF3h5ZvA4A6Q",
        [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
        ]
    ),
        new Recipe("Big Fat Burger",
        "This simply a test",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBlIAeL3h0ZXldD7Zqsu5qVv5aPsaVjY5Hd4cPUcaF3h5ZvA4A6Q",
        [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 1)
        ]
    )
      ];
constructor(private slService: ShoppingListService){
    
}
      getRecipes()
      {
          return this.recipes.slice();
      }

      getRecipe(id : number)
      {
          return this.recipes[id];
      }

      addIngredientToShoppingList(ingredients: Ingredient[]){
          this.slService.addIngredients(ingredients);
      }
      
}