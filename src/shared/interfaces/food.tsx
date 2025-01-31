import { StaticImageData } from "next/image";

export interface IFood {
  id: number;
  title: string;
  type: string;
  portions: number;
  portionsMax: number;
  img: StaticImageData;
}
