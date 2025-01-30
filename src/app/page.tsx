"use client";

import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import NavigationBar from "./Components/Dashboard/navigation-bar";
import ActionBtn from "./Components/Dashboard/action-btn";
import { StaticImageData } from "next/image";
import receitaImg from "@/app/Images/receitaRef.jpg";
import GridPlan from "./Components/Dashboard/grid-plan";
import GridReceitas from "./Components/Dashboard/grid-receitas";

type Food = {
  title: string;
  type: string;
  portions: number;
  img: StaticImageData;
};

type DayPlan = {
  day: string;
  breakfast: Food[];
  lunch: Food[];
  snack: Food[];
  dinner: Food[];
};

const cleanPlan: DayPlan[] = [
  {
    day: "Segunda",
    breakfast: [],
    lunch: [],
    snack: [],
    dinner: [],
  },
  {
    day: "Terça",
    breakfast: [],
    lunch: [],
    snack: [],
    dinner: [],
  },
  {
    day: "Quarta",
    breakfast: [],
    lunch: [],
    snack: [],
    dinner: [],
  },
  {
    day: "Quinta",
    breakfast: [],
    lunch: [],
    snack: [],
    dinner: [],
  },
  {
    day: "Sexta",
    breakfast: [],
    lunch: [],
    snack: [],
    dinner: [],
  },
  {
    day: "Sábado",
    breakfast: [],
    lunch: [],
    snack: [],
    dinner: [],
  },
  {
    day: "Domingo",
    breakfast: [],
    lunch: [],
    snack: [],
    dinner: [],
  },
];

const plan: DayPlan[] = [
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
];

export default function HomePage() {
  const [isLogged, setIsLogged] = useState<boolean>(true);
  console.log(setIsLogged);
  const [planning, setPlanning] = useState<DayPlan[]>(plan);

  const onClickNewPlan = () => {
    const newPlan: DayPlan[] = cleanPlan;
    setPlanning(newPlan);
    onRenderDashboard(newPlan);
  };

  const onRenderDashboard = (inputPlan: DayPlan[]) => {
    return (
      <>
        <section className={styles.btns_section}>
          <ActionBtn text="Novo Planejamento" onClick={onClickNewPlan} />
          <ActionBtn
            text="Minhas Receita"
            onClick={() => console.log("Minhas Receita")}
          />
        </section>
        <section className={styles.grids_section}>
          <GridPlan plan={inputPlan} />
          <GridReceitas />
        </section>
      </>
    );
  };

  useEffect(() => {
    onRenderDashboard(plan);
  }, []);

  return (
    <>
      {isLogged ? (
        <div className={styles.page}>
          <NavigationBar />
          <div className={styles.body_div}>{onRenderDashboard(planning)}</div>
        </div>
      ) : (
        redirect("/login")
      )}
    </>
  );
}
