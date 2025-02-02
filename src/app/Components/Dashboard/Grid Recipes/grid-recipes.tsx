import React from "react";
import styles from "./grid-recipes.module.css";
import { IRecipe } from "@/app/shared/interfaces/recipe";
import ReceitaCard from "../Recipe Card/recipe-card";
import ActionBtn from "../Action Button/action-btn";
import { Plus } from "lucide-react";

type ModalState = {
  modalRecipes: boolean;
  modalCrudRecipe: boolean;
  recipeLoad: IRecipe;
};

type Props = {
  receitas: IRecipe[];
  setReceitas: (receitas: IRecipe[]) => void;
  isModalOpen: ModalState;
  setIsModalOpen: (value: ModalState) => void;
};

const GridReceitas = ({
  receitas,
  setReceitas,
  isModalOpen,
  setIsModalOpen,
}: Props) => {
  const onRemoveReceita = (id: string) => {
    const updatedReceitas = receitas.filter((receita) => receita.id !== id);
    setReceitas(updatedReceitas);
  };

  return (
    <div className={`${styles.grid} ${styles.grid_receitas}`}>
      <div className={`${styles.row} ${styles.grid_header}`}>
        <p className={styles.grid_title}>Receitas</p>
      </div>
      {receitas.length === 0 ? (
        <div className={`${styles.grid_list}`}>
          <ActionBtn
            type="button"
            onClick={() =>
              setIsModalOpen({ ...isModalOpen, modalRecipes: true })
            }
            icon={<Plus size={16} />}
          />
        </div>
      ) : (
        <div className={`${styles.grid_list}`}>
          {receitas.map((receita, index) => (
            <ReceitaCard
              key={index}
              receita={receita}
              onRemoveReceita={onRemoveReceita}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default GridReceitas;
