import styles from "./grid-plan.module.css";
import Image from "next/image";
import { IWeeklyPlan } from "@/shared/interfaces/weeklyPlan";
import { IFood } from "@/shared/interfaces/food";
import { IDayPlan } from "@/shared/interfaces/dayPlan";

type Props = {
  plan: IWeeklyPlan;
  planning: IWeeklyPlan;
  setPlanning: (planning: IWeeklyPlan) => void;
};

const GridPlan = ({ plan, planning, setPlanning }: Props) => {
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

  const onRenderGridRow = (item: IFood, index: number, day: string) => {
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
    <div className={`${styles.grid_plan}`}>
      {Object.entries(plan).map(([day, item]: [string, IDayPlan]) => (
        <div key={day} className={`${styles.grid} ${styles.grid_plan_day}`}>
          <div className={`${styles.row} ${styles.grid_header}`}>
            <p className={styles.grid_title}>{item.day}</p>
          </div>
          <div className={`${styles.row} ${styles.grid_foods}`}>
            <div className={`${styles.row} ${styles.grid_columns}`}>
              <h4 className={`${styles.title}`}>Receita</h4>
              <h4 className={`${styles.num_portions}`}>Porções</h4>
              <h4 className={`${styles.type}`}>Tipo</h4>
              <h4 className={`${styles.btn}`}> </h4>
              <h4 className={`${styles.btn}`}> </h4>
            </div>
            {item.breakfast.map((food, idx) => onRenderGridRow(food, idx, day))}
            {item.lunch.map((food, idx) => onRenderGridRow(food, idx, day))}
            {item.snack.map((food, idx) => onRenderGridRow(food, idx, day))}
            {item.dinner.map((food, idx) => onRenderGridRow(food, idx, day))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GridPlan;
