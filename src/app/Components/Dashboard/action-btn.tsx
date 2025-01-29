import styles from "./action-btn.module.css";

type Props = {
  text: string;
  onClick: () => void;
};

const ActionBtn = ({ text, onClick }: Props) => {
  return (
    <button className={styles.btn_login} type="submit" onClick={onClick}>
      {text}
    </button>
  );
};

export default ActionBtn;
