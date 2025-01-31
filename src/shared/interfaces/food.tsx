import { StaticImageData } from "next/image";

export interface IFood {
  title: string;
  type: string;
  portions: number;
  img: StaticImageData;
}
