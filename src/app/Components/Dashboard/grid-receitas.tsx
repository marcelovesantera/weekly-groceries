import React from "react";
import styles from "./grid-receitas.module.css";
import { IFood } from "@/shared/interfaces/food";
import ReceitaCard from "./receita-card";

type Props = {
  receitas: IFood[];
};

const GridReceitas = ({ receitas }: Props) => {
  return (
    <div className={`${styles.grid} ${styles.grid_receitas}`}>
      <div className={`${styles.row} ${styles.grid_header}`}>
        <p className={styles.grid_title}>Receitas</p>
      </div>
      <div className={`${styles.grid_list}`}>
        {receitas.map((receita, index) => (
          <ReceitaCard key={index} receita={receita} />
        ))}
      </div>
    </div>
  );
};

export default GridReceitas;
