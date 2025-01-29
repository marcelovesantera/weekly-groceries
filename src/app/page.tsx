"use client";

import styles from "./page.module.css";
import { useState } from "react";
import { redirect } from "next/navigation";
import NavigationBar from "./Components/Dashboard/navigation-bar";
import ActionBtn from "./Components/Dashboard/action-btn";
import Image, { StaticImageData } from "next/image";
import receitaImg from "@/app/Images/receitaRef.jpg";

type Receita = {
  day: string;
  receita: {
    title: string;
    porcoes: number;
    img: StaticImageData;
  };
};

type ReceitaRow = Receita[];

export default function HomePage() {
  const [isLogged, setIsLogged] = useState(true);
  console.log(setIsLogged);

  const row1: ReceitaRow = [
    {
      day: "Segunda",
      receita: {
        title: "Frango com batata",
        porcoes: 2,
        img: receitaImg,
      },
    },
    {
      day: "Terça",
      receita: {
        title: "Frango com batata",
        porcoes: 2,
        img: receitaImg,
      },
    },
    {
      day: "Quarta",
      receita: {
        title: "Frango com batata",
        porcoes: 2,
        img: receitaImg,
      },
    },
    {
      day: "Quinta",
      receita: {
        title: "Frango com batata",
        porcoes: 2,
        img: receitaImg,
      },
    },
    {
      day: "Sexta",
      receita: {
        title: "Frango com batata",
        porcoes: 2,
        img: receitaImg,
      },
    },
    {
      day: "Sábado",
      receita: {
        title: "Frango com batata",
        porcoes: 2,
        img: receitaImg,
      },
    },
    {
      day: "Domingo",
      receita: {
        title: "Frango com batata",
        porcoes: 2,
        img: receitaImg,
      },
    },
  ];

  const row2: ReceitaRow = [
    {
      day: "Segunda",
      receita: {
        title: "Frango com batata",
        porcoes: 2,
        img: receitaImg,
      },
    },
    {
      day: "Terça",
      receita: {
        title: "Frango com batata",
        porcoes: 2,
        img: receitaImg,
      },
    },
    {
      day: "Quarta",
      receita: {
        title: "Frango com batata",
        porcoes: 2,
        img: receitaImg,
      },
    },
    {
      day: "Quinta",
      receita: {
        title: "Frango com batata",
        porcoes: 2,
        img: receitaImg,
      },
    },
    {
      day: "Sexta",
      receita: {
        title: "Frango com batata",
        porcoes: 2,
        img: receitaImg,
      },
    },
    {
      day: "Sábado",
      receita: {
        title: "Frango com batata",
        porcoes: 2,
        img: receitaImg,
      },
    },
    {
      day: "Domingo",
      receita: {
        title: "Frango com batata",
        porcoes: 2,
        img: receitaImg,
      },
    },
  ];

  const row3: ReceitaRow = [
    {
      day: "Segunda",
      receita: {
        title: "Frango com batata",
        porcoes: 2,
        img: receitaImg,
      },
    },
    {
      day: "Terça",
      receita: {
        title: "Frango com batata",
        porcoes: 2,
        img: receitaImg,
      },
    },
    {
      day: "Quarta",
      receita: {
        title: "Frango com batata",
        porcoes: 2,
        img: receitaImg,
      },
    },
    {
      day: "Quinta",
      receita: {
        title: "Frango com batata",
        porcoes: 2,
        img: receitaImg,
      },
    },
    {
      day: "Sexta",
      receita: {
        title: "Frango com batata",
        porcoes: 2,
        img: receitaImg,
      },
    },
    {
      day: "Sábado",
      receita: {
        title: "Frango com batata",
        porcoes: 2,
        img: receitaImg,
      },
    },
    {
      day: "Domingo",
      receita: {
        title: "Frango com batata",
        porcoes: 2,
        img: receitaImg,
      },
    },
  ];

  const row4: ReceitaRow = [
    {
      day: "Segunda",
      receita: {
        title: "Frango com batata",
        porcoes: 2,
        img: receitaImg,
      },
    },
    {
      day: "Terça",
      receita: {
        title: "Frango com batata",
        porcoes: 2,
        img: receitaImg,
      },
    },
    {
      day: "Quarta",
      receita: {
        title: "Frango com batata",
        porcoes: 2,
        img: receitaImg,
      },
    },
    {
      day: "Quinta",
      receita: {
        title: "Frango com batata",
        porcoes: 2,
        img: receitaImg,
      },
    },
    {
      day: "Sexta",
      receita: {
        title: "Frango com batata",
        porcoes: 2,
        img: receitaImg,
      },
    },
    {
      day: "Sábado",
      receita: {
        title: "Frango com batata",
        porcoes: 2,
        img: receitaImg,
      },
    },
    {
      day: "Domingo",
      receita: {
        title: "Frango com batata",
        porcoes: 2,
        img: receitaImg,
      },
    },
  ];

  const row5: ReceitaRow = [
    {
      day: "Segunda",
      receita: {
        title: "Frango com batata",
        porcoes: 2,
        img: receitaImg,
      },
    },
    {
      day: "Terça",
      receita: {
        title: "Frango com batata",
        porcoes: 2,
        img: receitaImg,
      },
    },
    {
      day: "Quarta",
      receita: {
        title: "Frango com batata",
        porcoes: 2,
        img: receitaImg,
      },
    },
    {
      day: "Quinta",
      receita: {
        title: "Frango com batata",
        porcoes: 2,
        img: receitaImg,
      },
    },
    {
      day: "Sexta",
      receita: {
        title: "Frango com batata",
        porcoes: 2,
        img: receitaImg,
      },
    },
    {
      day: "Sábado",
      receita: {
        title: "Frango com batata",
        porcoes: 2,
        img: receitaImg,
      },
    },
    {
      day: "Domingo",
      receita: {
        title: "Frango com batata",
        porcoes: 2,
        img: receitaImg,
      },
    },
  ];

  const plan = [row1, row2, row3, row4, row5];

  const onRenderGridRow = (item: Receita, index: number) => {
    return (
      <div key={index} className={styles.portion}>
        <div className={styles.receita_img_div}>
          <Image
            className={styles.receita_img}
            src={item.receita.img}
            alt="Receita Icone"
          />
        </div>
        <div className={styles.receita_info_div}>
          <p className={styles.receita_title}>{item.receita.title}</p>
          <span
            className={styles.portion_text}
          >{`Porções: ${item.receita.porcoes}x`}</span>
        </div>
      </div>
    );
  };

  const onRenderPlanning = () => {
    const stylePortions = `${styles.row} ${styles.grid_portions}`;

    return (
      <div>
        {plan.map((row, rowIndex) => (
          <div key={rowIndex} className={stylePortions}>
            {row.map((item, itemIndex) => onRenderGridRow(item, itemIndex))}
          </div>
        ))}
      </div>
    );
  };

  const onRenderGrid = () => {
    const styleGrid = `${styles.grid} ${styles.grid_planejamento}`;
    const styleHeader = `${styles.row} ${styles.grid_header}`;
    const styleDays = `${styles.row} ${styles.grid_days}`;
    const styleTitles = `${styles.row} ${styles.grid_titles}`;

    return (
      <div className={styleGrid}>
        <div className={styleHeader}>
          <p className={styles.grid_title}>Planejamento Semanal</p>
        </div>
        <div className={styleDays}>
          <div className={styleTitles}>
            <h4 className={styles.days}>Segunda</h4>
            <h4 className={styles.days}>Terça</h4>
            <h4 className={styles.days}>Quarta</h4>
            <h4 className={styles.days}>Quinta</h4>
            <h4 className={styles.days}>Sexta</h4>
            <h4 className={styles.days}>Sábado</h4>
            <h4 className={styles.days}>Domingo</h4>
          </div>
          {onRenderPlanning()}
        </div>
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

  const onRenderDashboard = () => {
    return (
      <>
        <NavigationBar />
        <section className={styles.btns_section}>
          <ActionBtn
            text="Novo Planejamento"
            onClick={() => console.log("Novo Planejamento")}
          />
          <ActionBtn
            text="Minhas Receita"
            onClick={() => console.log("Minhas Receita")}
          />
        </section>
        <section className={styles.grids_section}>
          {onRenderGrid()}
          {onRenderReceitas()}
        </section>
      </>
    );
  };

  return (
    <div className={styles.body_div}>
      {isLogged ? onRenderDashboard() : redirect("/login")}
    </div>
  );
}
