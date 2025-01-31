import styles from "./grid-plan.module.css";
import Image from "next/image";
import { IWeeklyPlan } from "@/shared/interfaces/weeklyPlan";
import { IFood } from "@/shared/interfaces/food";
import { IDayPlan } from "@/shared/interfaces/dayPlan";

type Props = {
  plan: IWeeklyPlan;
};

const GridPlan = ({ plan }: Props) => {
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
            onClick={() => console.log("Remover")}
          >
            Remover
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className={`${styles.grid_plan}`}>
      {Object.entries(plan).map(([day, item]: [string, IDayPlan], index) => (
        <div key={index} className={`${styles.grid} ${styles.grid_plan_day}`}>
          <div className={`${styles.row} ${styles.grid_header}`}>
            <p className={styles.grid_title}>{day}</p>{" "}
            {/* Exibe o nome do dia */}
          </div>
          <div className={`${styles.row} ${styles.grid_foods}`}>
            <div className={`${styles.row} ${styles.grid_columns}`}>
              <h4 className={`${styles.title}`}>Receita</h4>
              <h4 className={`${styles.num_portions}`}>Porções</h4>
              <h4 className={`${styles.type}`}>Tipo</h4>
              <h4 className={`${styles.btn}`}> </h4>
              <h4 className={`${styles.btn}`}> </h4>
            </div>
            {item.breakfast.map((food, idx) => onRenderGridRow(food, idx))}
            {item.lunch.map((food, idx) => onRenderGridRow(food, idx))}
            {item.snack.map((food, idx) => onRenderGridRow(food, idx))}
            {item.dinner.map((food, idx) => onRenderGridRow(food, idx))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GridPlan;
