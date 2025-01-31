import styles from "./submit-btn.module.css";

type Props = {
  text: string;
  onClick: () => void;
};

const SubmitBtn = ({ text, onClick }: Props) => {
  return (
    <button className={styles.btn_login} type="submit" onClick={onClick}>
      {text}
    </button>
  );
};

export default SubmitBtn;
