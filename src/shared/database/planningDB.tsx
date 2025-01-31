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
        id: 2,
        title: "Torrada com Ovo",
        type: "Café da Manhã",
        portions: 2,
        portionsMax: 4,
        img: receitaImg,
      },
    ],
    lunch: [
      {
        id: 1,
        title: "Frango com Batata",
        type: "Almoço",
        portions: 2,
        portionsMax: 4,
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
        id: 1,
        title: "Frango com Batata",
        type: "Almoço",
        portions: 2,
        portionsMax: 4,
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
        id: 2,
        title: "Torrada com Ovo",
        type: "Café da Manhã",
        portions: 2,
        portionsMax: 4,
        img: receitaImg,
      },
    ],
    lunch: [
      {
        id: 1,
        title: "Frango com Batata",
        type: "Almoço",
        portions: 2,
        portionsMax: 4,
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
        id: 1,
        title: "Frango com Batata",
        type: "Almoço",
        portions: 2,
        portionsMax: 4,
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
        id: 1,
        title: "Frango com Batata",
        type: "Almoço",
        portions: 2,
        portionsMax: 4,
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
        id: 1,
        title: "Frango com Batata",
        type: "Almoço",
        portions: 2,
        portionsMax: 4,
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
        id: 1,
        title: "Torrada com Ovo",
        type: "Café da Manhã",
        portions: 2,
        portionsMax: 4,
        img: receitaImg,
      },
    ],
    lunch: [
      {
        id: 1,
        title: "Frango com Batata",
        type: "Almoço",
        portions: 2,
        portionsMax: 4,
        img: receitaImg,
      },
    ],
    snack: [],
    dinner: [],
  },
};
