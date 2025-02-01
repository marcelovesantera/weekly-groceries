import { IRecipe } from "./recipe";

export interface IDayPlan {
  day: string;
  breakfast: IRecipe[];
  lunch: IRecipe[];
  snack: IRecipe[];
  dinner: IRecipe[];
}
