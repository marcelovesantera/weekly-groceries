"use client";

import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import NavigationBar from "./Components/Dashboard/navigation-bar";
import ActionBtn from "./Components/Dashboard/action-btn";
import GridPlan from "./Components/Dashboard/grid-plan";
import GridReceitas from "./Components/Dashboard/grid-receitas";
import { IWeeklyPlan } from "@/shared/interfaces/weeklyPlan";
import { cleanPlan, defaultPlan } from "@/shared/database/planningDB";
import { IFood } from "@/shared/interfaces/food";
import ModalReceitas from "./Components/Dashboard/modal-receitas";

export default function HomePage() {
  const [isLogged, setIsLogged] = useState<boolean>(true);
  console.log(setIsLogged);
  const [planning, setPlanning] = useState<IWeeklyPlan>(defaultPlan);
  const [receitas, setReceitas] = useState<IFood[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onRenderDashboard = (inputPlan: IWeeklyPlan) => {
    return (
      <>
        <section className={styles.btns_section}>
          <ActionBtn
            type="submit"
            text="Novo Planejamento"
            onClick={onClickNewPlan}
          />
          <ActionBtn
            type="submit"
            text="Minhas Receita"
            onClick={() => setIsModalOpen(true)}
          />
        </section>
        <section className={styles.grids_section}>
          <GridPlan
            plan={inputPlan}
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
    );
  };

  const onClickNewPlan = () => {
    setPlanning(cleanPlan);

    onRenderDashboard(cleanPlan);
  };

  useEffect(() => {
    onRenderDashboard(defaultPlan);
  }, []);

  return (
    <>
      {isLogged ? (
        <div className={styles.page}>
          <NavigationBar />
          <div className={styles.body_div}>{onRenderDashboard(planning)}</div>
          <ModalReceitas
            isOpen={isModalOpen}
            onRequestClose={() => setIsModalOpen(false)}
            receitas={receitas}
            setReceitas={setReceitas}
          />
        </div>
      ) : (
        redirect("/login")
      )}
    </>
  );
}
