import React from "react";
import styles from "./receita-card.module.css";
import { IFood } from "@/shared/interfaces/food";
import Image from "next/image";

type Props = {
  receita: IFood;
};
const ReceitaCard = ({ receita }: Props) => {
  return (
    <div className={styles.portion}>
      <div className={styles.receita_img_div}>
        <Image
          className={styles.receita_img}
          src={receita.img}
          alt="Receita Icone"
        />
      </div>
      <div className={styles.receita_info_div}>
        <p className={styles.receita_title}>{receita.title}</p>
        <span
          className={styles.portion_text}
        >{`Porções: ${receita.portions}x`}</span>
      </div>
      <div className={`${styles.btn}`}>
        <button
          className={`${styles.btn_remove}`}
          onClick={() => console.log("Remover")}
        >
          Remover
        </button>
      </div>
    </div>
  );
};

export default ReceitaCard;
