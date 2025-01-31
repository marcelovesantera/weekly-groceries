import { IWeeklyPlan } from "../interfaces/weeklyPlan";
import receitaImg from "@/app/Images/receitaRef.jpg";

export const cleanPlan: IWeeklyPlan = {
  segunda: {
    day: "Segunda",
    breakfast: [],
    lunch: [],
    snack: [],
    dinner: [],
  },
  terça: {
    day: "Terça",
    breakfast: [],
    lunch: [],
    snack: [],
    dinner: [],
  },
  quarta: {
    day: "Quarta",
    breakfast: [],
    lunch: [],
    snack: [],
    dinner: [],
  },
  quinta: {
    day: "Quinta",
    breakfast: [],
    lunch: [],
    snack: [],
    dinner: [],
  },
  sexta: {
    day: "Sexta",
    breakfast: [],
    lunch: [],
    snack: [],
    dinner: [],
  },
  sabado: {
    day: "Sábado",
    breakfast: [],
    lunch: [],
    snack: [],
    dinner: [],
  },
  domingo: {
    day: "Domingo",
    breakfast: [],
    lunch: [],
    snack: [],
    dinner: [],
  },
};

export const defaultPlan: IWeeklyPlan = {
  segunda: {
    day: "Segunda",
    breakfast: [
      {
        title: "Torrada com Ovo",
        type: "Café da Manhã",
        portions: 2,
        img: receitaImg,
      },
    ],
    lunch: [
      {
        title: "Frango com Batata",
        type: "Almoço",
        portions: 2,
        img: receitaImg,
      },
    ],
    snack: [],
    dinner: [],
  },
  terça: {
    day: "Terça",
    breakfast: [],
    lunch: [
      {
        title: "Frango com Batata",
        type: "Almoço",
        portions: 2,
        img: receitaImg,
      },
    ],
    snack: [],
    dinner: [],
  },
  quarta: {
    day: "Quarta",
    breakfast: [
      {
        title: "Torrada com Ovo",
        type: "Café da Manhã",
        portions: 2,
        img: receitaImg,
      },
    ],
    lunch: [
      {
        title: "Frango com Batata",
        type: "Almoço",
        portions: 2,
        img: receitaImg,
      },
    ],
    snack: [],
    dinner: [],
  },
  quinta: {
    day: "Quinta",
    breakfast: [],
    lunch: [
      {
        title: "Frango com Batata",
        type: "Almoço",
        portions: 2,
        img: receitaImg,
      },
    ],
    snack: [],
    dinner: [],
  },
  sexta: {
    day: "Sexta",
    breakfast: [],
    lunch: [
      {
        title: "Frango com Batata",
        type: "Almoço",
        portions: 2,
        img: receitaImg,
      },
    ],
    snack: [],
    dinner: [],
  },
  sabado: {
    day: "Sábado",
    breakfast: [],
    lunch: [
      {
        title: "Frango com Batata",
        type: "Almoço",
        portions: 2,
        img: receitaImg,
      },
    ],
    snack: [],
    dinner: [],
  },
  domingo: {
    day: "Domingo",
    breakfast: [
      {
        title: "Torrada com Ovo",
        type: "Café da Manhã",
        portions: 2,
        img: receitaImg,
      },
    ],
    lunch: [
      {
        title: "Frango com Batata",
        type: "Almoço",
        portions: 2,
        img: receitaImg,
      },
    ],
    snack: [],
    dinner: [],
  },
};
