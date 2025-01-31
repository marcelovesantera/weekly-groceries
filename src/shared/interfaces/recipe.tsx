import { StaticImageData } from "next/image";

export interface IRecipe {
  id: number;
  title: string;
  type: string;
  portions?: number;
  portionsMax: number;
  img: StaticImageData;
}
