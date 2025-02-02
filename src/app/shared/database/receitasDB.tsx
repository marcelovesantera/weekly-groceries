import { generateFakeID } from "@/app/utils/generateFakeID";
import { IRecipe } from "../interfaces/recipe";
import receitaImg from "@/app/Images/receitaRef.jpg";

export const ReceitasDB: IRecipe[] = [
  {
    id: generateFakeID(),
    title: "Frango com Batata",
    type: "Almoço",
    portionsMax: 4,
    img: receitaImg,
  },
  {
    id: generateFakeID(),
    title: "Arroz, Bife e Purê de Batata",
    type: "Almoço",
    portionsMax: 4,
    img: receitaImg,
  },
  {
    id: generateFakeID(),
    title: "Sanduíche Natural",
    type: "Lanche da Tarde",
    portionsMax: 2,
    img: receitaImg,
  },
  {
    id: generateFakeID(),
    title: "Massa Bolonhesa",
    type: "Jantar",
    portionsMax: 4,
    img: receitaImg,
  },
  {
    id: generateFakeID(),
    title: "Torrada com Ovo",
    type: "Café da Manhã",
    portionsMax: 2,
    img: receitaImg,
  },
];
