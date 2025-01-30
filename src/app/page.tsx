"use client";

import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import NavigationBar from "./Components/Dashboard/navigation-bar";
import ActionBtn from "./Components/Dashboard/action-btn";
import Image, { StaticImageData } from "next/image";
import receitaImg from "@/app/Images/receitaRef.jpg";

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
    onRenderGrids(newPlan);
    onRenderReceitas();
  };

  const onRenderGridRow = (item: Food, index: number) => {
    return (
      <div key={index} className={`${styles.row} ${styles.grid_days}`}>
        <div className={`${styles.title_div}`}>
          <div className={`${styles.receita_img_div}`}>
            <Image
              className={styles.receita_img}
              src={item.img}
              alt="Receita Icone"
            />
          </div>
          <p className={`${styles.receita_title}`}>{item.title}</p>
        </div>
        <span className={`${styles.portion_text} ${styles.num_portions}`}>
          {item.portions}x
        </span>
        <span className={`${styles.type_text} ${styles.type}`}>
          {item.type}
        </span>
        <div className={`${styles.btn}`}>
          <button className={`${styles.btn_edit}`}>Editar</button>
        </div>
        <div className={`${styles.btn}`}>
          <button className={`${styles.btn_remove}`}>Remover</button>
        </div>
      </div>
    );
  };

  const onRenderGrids = (inputPlan: DayPlan[]) => {
    return (
      <div className={`${styles.grid_plan}`}>
        {inputPlan.map((item: DayPlan, index: number) => (
          <div key={index} className={`${styles.grid} ${styles.grid_plan_day}`}>
            <div className={`${styles.row} ${styles.grid_header}`}>
              <p className={styles.grid_title}>{item.day}</p>
            </div>
            <div className={`${styles.row} ${styles.grid_foods}`}>
              <div className={`${styles.row} ${styles.grid_columns}`}>
                <h4 className={`${styles.title}`}>Receita</h4>
                <h4 className={`${styles.num_portions}`}>Porções</h4>
                <h4 className={`${styles.type}`}>Tipo</h4>
                <h4 className={`${styles.btn}`}> </h4>
                <h4 className={`${styles.btn}`}> </h4>
              </div>
              {item.breakfast.map((food, index) =>
                onRenderGridRow(food, index)
              )}
              {item.lunch.map((food, index) => onRenderGridRow(food, index))}
              {item.snack.map((food, index) => onRenderGridRow(food, index))}
              {item.dinner.map((food, index) => onRenderGridRow(food, index))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const onRenderReceitas = () => {
    const styleGrid = `${styles.grid} ${styles.grid_receitas}`;
    const styleHeader = `${styles.row} ${styles.grid_header}`;

    return (
      <div className={styleGrid}>
        <div className={styleHeader}>
          <p className={styles.grid_title}>Receitas</p>
        </div>
      </div>
    );
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
          {onRenderGrids(inputPlan)}
          {onRenderReceitas()}
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
