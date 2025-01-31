import { IRecipe } from "../interfaces/recipe";
import receitaImg from "@/app/Images/receitaRef.jpg";

export const ReceitasDB: IRecipe[] = [
  {
    id: 1,
    title: "Frango com Batata",
    type: "Almoço",
    portionsMax: 4,
    img: receitaImg,
  },
  {
    id: 2,
    title: "Arroz, Bife e Purê de Batata",
    type: "Almoço",
    portionsMax: 4,
    img: receitaImg,
  },
  {
    id: 3,
    title: "Sanduíche Natural",
    type: "Lanche da Tarde",
    portionsMax: 2,
    img: receitaImg,
  },
  {
    id: 4,
    title: "Massa Bolonhesa",
    type: "Jantar",
    portionsMax: 4,
    img: receitaImg,
  },
  {
    id: 4,
    title: "Torrada com Ovo",
    type: "Café da Manhã",
    portionsMax: 2,
    img: receitaImg,
  },
];
