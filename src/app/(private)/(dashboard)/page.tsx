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
import useUser from "@/app/hooks/useUser";
import { useRouter } from "next/navigation";
import ModalReceitas from "../../Components/Dashboard/Modal Repices/modal-recipes";
import ModalCRUDRecipe from "@/app/Components/Dashboard/Modal CRUD Recipe/modal-crud-recipe";

type ModalState = {
  modalRecipes: boolean;
  modalCrudRecipe: boolean;
};

export default function HomePage() {
  const [planning, setPlanning] = useState<IWeeklyPlan>(cleanPlan);
  const [receitas, setReceitas] = useState<IRecipe[]>([]);
  const [receitasDB, setReceitasDB] = useState<IRecipe[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<ModalState>({
    modalRecipes: false,
    modalCrudRecipe: false,
  });

  const { user, loading } = useUser();
  const router = useRouter();

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (!user) {
    router.push("/login");
    return null;
  }

  return (
    <div className={styles.page}>
      <div className={styles.page_div}>
        <NavigationBar user={user} />
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
          receitasDB={receitasDB}
          setReceitasDB={setReceitasDB}
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
          receitasDB={receitasDB}
          setReceitasDB={setReceitasDB}
        />
      </div>
    </div>
  );
}
