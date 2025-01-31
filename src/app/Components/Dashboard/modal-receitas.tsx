import React, { useState, useEffect } from "react";
import styles from "./modal-receitas.module.css";
import Modal from "react-modal";
import Image from "next/image";
import { ReceitasDB } from "@/shared/database/receitasDB";
import { IFood } from "@/shared/interfaces/food";

type Props = {
  isOpen: boolean;
  onRequestClose: () => void;
  receitas: IFood[];
  setReceitas: (value: IFood[]) => void;
};

const ModalReceitas = ({
  isOpen,
  onRequestClose,
  receitas,
  setReceitas,
}: Props) => {
  const [receitasDB, setReceitasDB] = useState<IFood[]>([]);

  useEffect(() => {
    setReceitasDB(ReceitasDB);
  }, []);

  const onAddReceita = (selectedReceitaId: number) => {
    const listaReceitas = [...receitas];

    const newReceita = receitasDB.find(
      (receita) => receita.id === selectedReceitaId
    );
    if (!newReceita) {
      return;
    }

    listaReceitas.push({ ...newReceita, portions: newReceita.portionsMax });

    setReceitas(listaReceitas);
  };

  const onRenderGridRow = (item: IFood, index: number) => {
    return (
      <div key={index} className={`${styles.row} ${styles.grid_days}`}>
        <div className={`${styles.title_div}`}>
          <div className={`${styles.receita_img_div}`}>
            <Image
              className={styles.receita_img}
              src={item.img}
              alt="Receita Icone"
            />
          </div>
          <p className={`${styles.receita_title}`}>{item.title}</p>
        </div>
        <span className={`${styles.portion_text} ${styles.num_portions}`}>
          {item.portionsMax}x
        </span>
        <span className={`${styles.type_text} ${styles.type}`}>
          {item.type}
        </span>
        <div className={`${styles.btn}`}>
          <button
            className={`${styles.btn_edit}`}
            onClick={() => console.log("Editar")}
          >
            Editar
          </button>
        </div>
        <div className={`${styles.btn}`}>
          <button
            className={`${styles.btn_remove}`}
            onClick={() => onAddReceita(item.id)}
          >
            Adicionar
          </button>
        </div>
      </div>
    );
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
      ariaHideApp={false}
    >
      <div className={`${styles.grid_plan}`}>
        <div className={`${styles.grid} ${styles.grid_plan_day}`}>
          <div className={`${styles.row} ${styles.grid_header}`}>
            <p className={styles.grid_title}>Minhas Receitas</p>
          </div>
          <div className={`${styles.row} ${styles.grid_foods}`}>
            <div className={`${styles.row} ${styles.grid_columns}`}>
              <h4 className={`${styles.title}`}>Receita</h4>
              <h4 className={`${styles.num_portions}`}>Porções</h4>
              <h4 className={`${styles.type}`}>Tipo</h4>
              <h4 className={`${styles.btn}`}> </h4>
              <h4 className={`${styles.btn}`}> </h4>
            </div>
            {receitasDB.map((food, idx) => onRenderGridRow(food, idx))}
          </div>
        </div>
      </div>
      <div className={styles.modal_btns}>
        <button onClick={onRequestClose} className={styles.close_btn}>
          Fechar
        </button>
      </div>
    </Modal>
  );
};

export default ModalReceitas;
