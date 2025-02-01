import React, { useEffect, useState } from "react";
import styles from "./gridview.module.css";
import Image from "next/image";
import ActionBtn from "../Action Button/action-btn";
import { IDayPlan } from "@/shared/interfaces/dayPlan";
import { IWeeklyPlan } from "@/shared/interfaces/weeklyPlan";
import { IRecipe } from "@/shared/interfaces/recipe";
import { Plus } from "lucide-react";

type Props = {
  dayPlan: IDayPlan;
  planning: IWeeklyPlan;
  setPlanning: (planning: IWeeklyPlan) => void;
};

const GridView = ({ dayPlan, planning, setPlanning }: Props) => {
  const [haveRecipes, setHaveRecipes] = useState<boolean>(false);

  useEffect(() => {
    if (
      dayPlan.breakfast.length > 0 ||
      dayPlan.lunch.length > 0 ||
      dayPlan.snack.length > 0 ||
      dayPlan.dinner.length > 0
    ) {
      setHaveRecipes(true);
    }
  }, []);

  const onRemoveReceita = (id: number, day: string) => {
    const updatedDay: IDayPlan =
      planning[day.toLowerCase() as keyof IWeeklyPlan];

    const updatedDayPlan: IDayPlan = {
      ...updatedDay,
      breakfast: updatedDay.breakfast.filter((food) => food.id !== id),
      lunch: updatedDay.lunch.filter((food) => food.id !== id),
      snack: updatedDay.snack.filter((food) => food.id !== id),
      dinner: updatedDay.dinner.filter((food) => food.id !== id),
    };

    const updatedPlanning: IWeeklyPlan = {
      ...planning,
      [day.toLowerCase()]: updatedDayPlan,
    };
    setPlanning(updatedPlanning);
  };

  const onRenderGridRow = (item: IRecipe, index: number, day: string) => {
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
          {item.portions}x
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
            onClick={() => onRemoveReceita(item.id, day)}
          >
            Remover
          </button>
        </div>
      </div>
    );
  };

  return (
    <div key={dayPlan.day} className={`${styles.grid} ${styles.grid_plan_day}`}>
      <div className={`${styles.row} ${styles.grid_header}`}>
        <p className={styles.grid_title}>{dayPlan.day}</p>
      </div>
      {!haveRecipes ? (
        <div className={`${styles.grid_list}`}>
          <ActionBtn
            type="button-primary"
            onClick={() => console.log("Adicionar Receita")}
            icon={<Plus size={16} />}
          />
        </div>
      ) : (
        <>
          <div className={`${styles.row} ${styles.grid_foods}`}>
            <div className={`${styles.row} ${styles.grid_columns}`}>
              <h4 className={`${styles.title}`}>Receita</h4>
              <h4 className={`${styles.num_portions}`}>Porções</h4>
              <h4 className={`${styles.type}`}>Tipo</h4>
              <h4 className={`${styles.btn}`}> </h4>
              <h4 className={`${styles.btn}`}> </h4>
            </div>
            {dayPlan.breakfast.map((food, idx) =>
              onRenderGridRow(food, idx, dayPlan.day)
            )}
            {dayPlan.lunch.map((food, idx) =>
              onRenderGridRow(food, idx, dayPlan.day)
            )}
            {dayPlan.snack.map((food, idx) =>
              onRenderGridRow(food, idx, dayPlan.day)
            )}
            {dayPlan.dinner.map((food, idx) =>
              onRenderGridRow(food, idx, dayPlan.day)
            )}
          </div>
          <div className={`${styles.grid_list}`}>
            <ActionBtn
              type="button-primary"
              onClick={() => console.log("Adicionar Receita")}
              icon={<Plus size={16} />}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default GridView;
