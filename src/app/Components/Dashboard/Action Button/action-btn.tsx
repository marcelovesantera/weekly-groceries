import styles from "./action-btn.module.css";

type Props = {
  type: "submit" | "button" | "button-primary";
  onClick: () => void;
  text?: string;
  icon?: React.ReactNode;
};

const ActionBtn = ({ type, onClick, text, icon }: Props) => {
  const styleBtn =
    type === "submit"
      ? styles.btn_submit
      : type === "button-primary"
      ? styles.btn_primary
      : styles.btn_action;

  return (
    <button className={styleBtn} onClick={onClick}>
      {icon && <span>{icon}</span>}
      {text && <span>{text}</span>}
    </button>
  );
};

export default ActionBtn;
