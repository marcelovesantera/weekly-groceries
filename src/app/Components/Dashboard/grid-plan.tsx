import styles from "./grid-plan.module.css";
import Image, { StaticImageData } from "next/image";

type Food = {
  title: string;
  type: string;
  portions: number;
  img: StaticImageData;
};

type DayPlan = {
  day: string;
  breakfast: Food[];
  lunch: Food[];
  snack: Food[];
  dinner: Food[];
};

type Props = {
  plan: DayPlan[];
};

function onRenderGridRow(item: Food, index: number) {
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
      <span className={`${styles.type_text} ${styles.type}`}>{item.type}</span>
      <div className={`${styles.btn}`}>
        <button className={`${styles.btn_edit}`}>Editar</button>
      </div>
      <div className={`${styles.btn}`}>
        <button className={`${styles.btn_remove}`}>Remover</button>
      </div>
    </div>
  );
}

const GridPlan = ({ plan }: Props) => {
  return (
    <div className={`${styles.grid_plan}`}>
      {plan.map((item: DayPlan, index: number) => (
        <div key={index} className={`${styles.grid} ${styles.grid_plan_day}`}>
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
            {item.breakfast.map((food, index) => onRenderGridRow(food, index))}
            {item.lunch.map((food, index) => onRenderGridRow(food, index))}
            {item.snack.map((food, index) => onRenderGridRow(food, index))}
            {item.dinner.map((food, index) => onRenderGridRow(food, index))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GridPlan;
