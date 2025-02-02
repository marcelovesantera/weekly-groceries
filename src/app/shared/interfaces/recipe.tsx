import { StaticImageData } from "next/image";
import { IProduct } from "./product";

export interface IRecipe {
  id?: string;
  title?: string;
  type?: string;
  portions?: number;
  portionsMax?: number;
  img?: string | StaticImageData;
  description?: string;
  products?: IProduct[];
}
