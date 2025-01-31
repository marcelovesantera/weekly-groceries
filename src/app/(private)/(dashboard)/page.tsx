"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import NavigationBar from "../../Components/Dashboard/Navigation Bar/navigation-bar";
import ActionBtn from "../../Components/Dashboard/Action Button/action-btn";
import GridPlan from "../../Components/Dashboard/Grid Plan/grid-plan";
import GridReceitas from "../../Components/Dashboard/Grid Recipes/grid-recipes";
import { IWeeklyPlan } from "@/shared/interfaces/weeklyPlan";
import { cleanPlan, defaultPlan } from "@/shared/database/planningDB";
import { IRecipe } from "@/shared/interfaces/recipe";
import ModalReceitas from "../../Components/Dashboard/Modal Repices/modal-recipes";

export default function HomePage() {
  const [planning, setPlanning] = useState<IWeeklyPlan>(defaultPlan);
  const [receitas, setReceitas] = useState<IRecipe[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.page}>
      <NavigationBar />
      <div className={styles.body_div}>
        <>
          <section className={styles.btns_section}>
            <ActionBtn
              type="submit"
              text="Novo Planejamento"
              onClick={() => setPlanning(cleanPlan)}
            />
            <ActionBtn
              type="submit"
              text="Minhas Receita"
              onClick={() => setIsModalOpen(true)}
            />
          </section>
          <section className={styles.grids_section}>
            <GridPlan
              plan={planning}
              planning={planning}
              setPlanning={setPlanning}
            />
            <GridReceitas
              receitas={receitas}
              setReceitas={setReceitas}
              setIsModalOpen={setIsModalOpen}
            />
          </section>
        </>
      </div>
      <ModalReceitas
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        receitas={receitas}
        setReceitas={setReceitas}
      />
    </div>
  );
}
