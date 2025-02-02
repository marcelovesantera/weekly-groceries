import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import styles from "./modal-add.module.css";
import ActionBtn from "../Action Button/action-btn";
import { IRecipe } from "@/app/shared/interfaces/recipe";
import { IWeeklyPlan } from "@/app/shared/interfaces/weeklyPlan";

const dias = [
  "",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
  "Domingo",
] as const;

type Props = {
  isOpen: boolean;
  onRequestClose: (action: string) => void;
  recipe: IRecipe;
  planning: IWeeklyPlan;
  setPlanning: (value: IWeeklyPlan) => void;
};

const ModalAddRecipe = ({
  isOpen,
  onRequestClose,
  recipe,
  planning,
  setPlanning,
}: Props) => {
  const [recipeItem, setRecipeItem] = useState<IRecipe>(recipe);

  const onClickClose = (res: string) => {
    if (recipeItem.day === "Segunda") {
      planning.segunda.lunch.push(recipeItem);
    }

    if (recipeItem.day === "Terça") {
      planning.terça.lunch.push(recipeItem);
    }

    if (recipeItem.day === "Quarta") {
      planning.quarta.lunch.push(recipeItem);
    }

    if (recipeItem.day === "Quinta") {
      planning.quinta.lunch.push(recipeItem);
    }

    if (recipeItem.day === "Sexta") {
      planning.sexta.lunch.push(recipeItem);
    }

    if (recipeItem.day === "Sábado") {
      planning.sabado.lunch.push(recipeItem);
    }

    if (recipeItem.day === "Domingo") {
      planning.domingo.lunch.push(recipeItem);
    }

    const updatedPlanning = { ...planning };

    setPlanning(updatedPlanning);
    onRequestClose(res);
  };

  useEffect(() => setRecipeItem(recipe), [isOpen, recipe]);

  return (
    <Modal
      isOpen={isOpen}
      className={styles.modal}
      overlayClassName={styles.overlay}
      ariaHideApp={false}
    >
      <div className={styles.div_add_recipe}>
        <div className={styles.items_div}>
          <span className={styles.input_text}>Dia da Refeição:</span>
          <select
            className={styles.select_input}
            name="type"
            onChange={(e) =>
              setRecipeItem({
                ...recipeItem,
                day: e.target.value,
              })
            }
          >
            {dias.map((dia) => (
              <option key={dia} value={dia}>
                {dia}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className={styles.modal_btns}>
        <ActionBtn
          type="close"
          text="Adicionar"
          onClick={() => onClickClose("Close")}
        />
      </div>
    </Modal>
  );
};

export default ModalAddRecipe;
