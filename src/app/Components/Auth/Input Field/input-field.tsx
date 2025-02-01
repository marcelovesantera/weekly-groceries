import styles from "./input-field.module.css";

type Props = {
  type: string;
  described?: string;
  placeholder?: string;
  name: string;
  setValue: (value: string) => void;
  align?: string;
  maxLength?: number;
};

const InputField = ({
  type,
  described,
  placeholder,
  name,
  setValue,
  align,
  maxLength,
}: Props) => {
  const styleInput = !align ? styles.input : `${styles.input} ${styles.align}`;

  return (
    <input
      className={styleInput}
      type={type}
      aria-describedby={described}
      placeholder={placeholder}
      name={name}
      maxLength={maxLength}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default InputField;
