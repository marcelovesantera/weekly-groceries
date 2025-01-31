import { IFood } from "./food";

export interface IDayPlan {
  day: string;
  breakfast: IFood[];
  lunch: IFood[];
  snack: IFood[];
  dinner: IFood[];
}
