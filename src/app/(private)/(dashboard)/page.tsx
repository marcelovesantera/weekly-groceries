"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import NavigationBar from "../../Components/Dashboard/Navigation Bar/navigation-bar";
import ActionBtn from "../../Components/Dashboard/Action Button/action-btn";
import GridPlan from "../../Components/Dashboard/Grid Plan/grid-plan";
import GridReceitas from "../../Components/Dashboard/Grid Recipes/grid-recipes";
import { IWeeklyPlan } from "@/app/shared/interfaces/weeklyPlan";
import { cleanPlan, defaultPlan } from "@/app/shared/database/planningDB";
import { IRecipe } from "@/app/shared/interfaces/recipe";
import ModalReceitas from "../../Components/Dashboard/Modal Repices/modal-recipes";
import ModalCRUDRecipe from "@/app/Components/Dashboard/Modal CRUD Recipe/modal-crud-recipe";

type ModalState = {
  modalRecipes: boolean;
  modalCrudRecipe: boolean;
};

export default function HomePage() {
  const [planning, setPlanning] = useState<IWeeklyPlan>(defaultPlan);
  const [receitas, setReceitas] = useState<IRecipe[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<ModalState>({
    modalRecipes: false,
    modalCrudRecipe: false,
  });

  return (
    <div className={styles.page}>
      <div className={styles.page_div}>
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
                onClick={() =>
                  setIsModalOpen({ ...isModalOpen, modalRecipes: true })
                }
              />
            </section>
            <section className={styles.grids_section}>
              <GridPlan planning={planning} setPlanning={setPlanning} />
              <GridReceitas
                receitas={receitas}
                setReceitas={setReceitas}
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
              />
            </section>
          </>
        </div>
        <ModalReceitas
          isOpen={isModalOpen.modalRecipes}
          onRequestClose={(atClose: string) => {
            if (atClose === "NewRecipe") {
              setIsModalOpen({ modalRecipes: false, modalCrudRecipe: true });
            } else if (atClose === "Close") {
              setIsModalOpen({ modalRecipes: false, modalCrudRecipe: false });
            }
          }}
          receitas={receitas}
          setReceitas={setReceitas}
        />
        <ModalCRUDRecipe
          isOpen={isModalOpen.modalCrudRecipe}
          onRequestClose={(atClose: string) => {
            if (atClose === "Close") {
              setIsModalOpen({ modalRecipes: false, modalCrudRecipe: false });
            } else if (atClose === "MyRecipes") {
              setIsModalOpen({ modalRecipes: true, modalCrudRecipe: false });
            }
          }}
          receitas={receitas}
          setReceitas={setReceitas}
        />
      </div>
    </div>
  );
}
