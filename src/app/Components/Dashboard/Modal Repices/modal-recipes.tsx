import React, { useEffect } from "react";
import styles from "./modal-recipes.module.css";
import Modal from "react-modal";
import Image from "next/image";
import { ReceitasDB } from "@/app/shared/database/receitasDB";
import { IRecipe } from "@/app/shared/interfaces/recipe";
import ActionBtn from "../Action Button/action-btn";

type Props = {
  isOpen: boolean;
  onRequestClose: (action: { tipo: string; recipe: IRecipe | object }) => void;
  receitas: IRecipe[];
  setReceitas: (value: IRecipe[]) => void;
  receitasDB: IRecipe[];
  setReceitasDB: (value: IRecipe[]) => void;
};

const ModalReceitas = ({
  isOpen,
  onRequestClose,
  receitas,
  setReceitas,
  receitasDB,
  setReceitasDB,
}: Props) => {
  useEffect(() => {
    setReceitasDB(ReceitasDB);
  }, []);

  const onAddReceita = (selectedReceitaId: string) => {
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

  // const onEditRecipe = (selectedReceitaId: string) => {
  //   const selectedReceita = receitasDB.find(
  //     (receita) => receita.id === selectedReceitaId
  //   );
  //   if (!selectedReceita) {
  //     return;
  //   }

  //   onRequestClose({tipo: "EditRecipe", recipe: selectedReceita});
  // }

  const onRenderGridRow = (item: IRecipe, index: number) => {
    return (
      <div key={index} className={`${styles.row} ${styles.grid_days}`}>
        <div className={`${styles.title_div}`}>
          <div className={`${styles.receita_img_div}`}>
            <Image
              className={styles.receita_img}
              src={item.img || "/path/to/default/image.jpg"}
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
        {/* <div className={`${styles.btn}`}>
          <button
            className={`${styles.btn_edit}`}
            onClick={() => item.id !== undefined && onEditRecipe(item.id)}
          >
            Editar
          </button>
        </div> */}
        <div className={`${styles.btn}`}>
          <button
            className={`${styles.btn_remove}`}
            onClick={() => item.id !== undefined && onAddReceita(item.id)}
          >
            Adicionar
          </button>
        </div>
      </div>
    );
  };

  const onClickClose = (res: { tipo: string; recipe: object }) => {
    onRequestClose(res);
  };

  return (
    <Modal
      isOpen={isOpen}
      className={styles.modal}
      overlayClassName={styles.overlay}
      ariaHideApp={false}
    >
      <div className={`${styles.grid_plan}`}>
        <div className={styles.grid_actions}>
          <ActionBtn
            type="submit"
            text="Nova Receita"
            onClick={() => onClickClose({ tipo: "NewRecipe", recipe: {} })}
          />
        </div>
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
        <ActionBtn
          type="close"
          text="Fechar"
          onClick={() => onClickClose({ tipo: "Close", recipe: {} })}
        />
      </div>
    </Modal>
  );
};

export default ModalReceitas;
