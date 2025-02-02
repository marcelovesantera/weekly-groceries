"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import NavigationBar from "../../Components/Dashboard/Navigation Bar/navigation-bar";
import ActionBtn from "../../Components/Dashboard/Action Button/action-btn";
import GridPlan from "../../Components/Dashboard/Grid Plan/grid-plan";
import GridReceitas from "../../Components/Dashboard/Grid Recipes/grid-recipes";
import { IWeeklyPlan } from "@/app/shared/interfaces/weeklyPlan";
import { cleanPlan } from "@/app/shared/database/planningDB";
import { IRecipe } from "@/app/shared/interfaces/recipe";
import ModalReceitas from "../../Components/Dashboard/Modal Repices/modal-recipes";
import ModalCRUDRecipe from "@/app/Components/Dashboard/Modal CRUD Recipe/modal-crud-recipe";
import ModalAddRecipe from "@/app/Components/Dashboard/Modal AddRecipe/modal-add";

type ModalState = {
  modalRecipes: boolean;
  modalCrudRecipe: boolean;
  modalAddRecipe: boolean;
  recipeLoad: IRecipe;
};

export default function HomePage() {
  const [planning, setPlanning] = useState<IWeeklyPlan>(cleanPlan);
  const [receitas, setReceitas] = useState<IRecipe[]>([]);
  const [receitasDB, setReceitasDB] = useState<IRecipe[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<ModalState>({
    modalRecipes: false,
    modalCrudRecipe: false,
    modalAddRecipe: false,
    recipeLoad: {} as IRecipe,
  });

  const onAddReceita = (id: string) => {
    const receita = receitasDB.find((receita) => receita.id === id);
    if (receita) {
      setIsModalOpen({
        ...isModalOpen,
        recipeLoad: receita,
        modalAddRecipe: true,
      });
    }
  };

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
                onAddReceita={onAddReceita}
              />
            </section>
          </>
        </div>
        <ModalReceitas
          isOpen={isModalOpen.modalRecipes}
          onRequestClose={(atClose) => {
            if (atClose.tipo === "NewRecipe") {
              setIsModalOpen({
                ...isModalOpen,
                modalRecipes: false,
                modalCrudRecipe: true,
              });
            } else if (atClose.tipo === "Close") {
              setIsModalOpen({
                ...isModalOpen,
                modalRecipes: false,
                modalCrudRecipe: false,
              });
            } else if (atClose.tipo === "EditRecipe") {
              setIsModalOpen({
                ...isModalOpen,
                modalRecipes: false,
                modalCrudRecipe: true,
              });
            }
          }}
          receitas={receitas}
          setReceitas={setReceitas}
          receitasDB={receitasDB}
          setReceitasDB={setReceitasDB}
        />
        <ModalCRUDRecipe
          isOpen={isModalOpen.modalCrudRecipe}
          onRequestClose={(atClose: string) => {
            if (atClose === "Close") {
              setIsModalOpen({
                ...isModalOpen,
                modalRecipes: false,
                modalCrudRecipe: false,
              });
            } else if (atClose === "MyRecipes") {
              setIsModalOpen({
                ...isModalOpen,
                modalRecipes: true,
                modalCrudRecipe: false,
              });
            }
          }}
          receita={isModalOpen.recipeLoad}
          receitasDB={receitasDB}
          setReceitasDB={setReceitasDB}
        />
        <ModalAddRecipe
          isOpen={isModalOpen.modalAddRecipe}
          onRequestClose={() =>
            setIsModalOpen({
              ...isModalOpen,
              modalAddRecipe: false,
            })
          }
          recipe={isModalOpen.recipeLoad}
          planning={planning}
          setPlanning={setPlanning}
        />
      </div>
    </div>
  );
}
