import { StaticImageData } from "next/image";

export interface IFood {
  title: string;
  type: string;
  portions: number;
  portionsMax: number;
  img: StaticImageData;
}
