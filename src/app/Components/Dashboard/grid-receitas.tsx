import styles from "./grid-receitas.module.css";

const GridReceitas = () => {
  return (
    <div className={`${styles.grid} ${styles.grid_receitas}`}>
      <div className={`${styles.row} ${styles.grid_header}`}>
        <p className={styles.grid_title}>Receitas</p>
      </div>
    </div>
  );
};

export default GridReceitas;
