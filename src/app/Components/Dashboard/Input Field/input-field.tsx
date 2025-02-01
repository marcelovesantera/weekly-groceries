import styles from "./input-field.module.css";

type Props = {
  type?: string;
  described?: string;
  placeholder?: string;
  name: string;
  setValue: (value: string) => void;
};

const InputField = ({
  type,
  described,
  placeholder,
  name,
  setValue,
}: Props) => {
  return (
    <input
      className={styles.input}
      type={type}
      aria-describedby={described}
      placeholder={placeholder}
      name={name}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default InputField;
