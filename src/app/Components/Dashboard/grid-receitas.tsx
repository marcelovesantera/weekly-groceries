import React from "react";
import styles from "./grid-receitas.module.css";
import { IFood } from "@/shared/interfaces/food";
import ReceitaCard from "./receita-card";
import ActionBtn from "./action-btn";
import { Plus } from "lucide-react";

type Props = {
  receitas: IFood[];
  setReceitas: (receitas: IFood[]) => void;
  setIsModalOpen: (isOpen: boolean) => void;
};

const GridReceitas = ({ receitas, setReceitas, setIsModalOpen }: Props) => {
  const onRemoveReceita = (id: number) => {
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
            onClick={() => setIsModalOpen(true)}
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
