import React from "react";
import styles from "./recipe-card.module.css";
import { IRecipe } from "@/app/shared/interfaces/recipe";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import receitaImgDefault from "@/app/Images/receitaRef.jpg";

type Props = {
  receita: IRecipe;
  onRemoveReceita: (id: number) => void;
};
const ReceitaCard = ({ receita, onRemoveReceita }: Props) => {
  return (
    <div className={styles.receita_card}>
      <div className={styles.portion}>
        <div className={styles.receita_img_div}>
          <Image
            className={styles.receita_img}
            src={receita.img || receitaImgDefault}
            alt="Receita Icone"
          />
        </div>
        <div className={styles.receita_info_div}>
          <p className={styles.receita_title}>{receita.title}</p>
          <span
            className={styles.portion_text}
          >{`Porções: ${receita.portions}x`}</span>
        </div>
      </div>
      <div className={`${styles.btn}`}>
        <button
          className={`${styles.btn_remove}`}
          onClick={() =>
            receita.id !== undefined && onRemoveReceita(receita.id)
          }
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
};

export default ReceitaCard;
