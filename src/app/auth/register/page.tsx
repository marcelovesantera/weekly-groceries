"use client";

import styles from "./page.module.css";
import { useState } from "react";
import InputField from "@/app/Components/Auth/input-field";
import SubmitBtn from "@/app/Components/Auth/submit-btn";

const RegisterPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const emailType = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordType = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{6,})/;

  const onValidateInput = (input: string, type: string): boolean => {
    if (type === "email") {
      return emailType.test(input);
    }

    if (type === "password") {
      return passwordType.test(input);
    }

    return true;
  };

  const onHandleRegister = (email: string, password: string) => {
    console.log("Register attempt:", { email, password });

    if (email === "" || password === "") {
      console.log("Email e senha são obrigatórios");
      return;
    }

    if (
      onValidateInput(email, "email") &&
      onValidateInput(password, "password")
    ) {
      console.log("Registro efetuado com sucesso");
    } else {
      console.log("Email ou senha inválidos");
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.form_div}>
          <div className={styles.text_div}>
            <h4 className={styles.text}>
              Cadastre-se no <b>Weekly Groceries!</b>
            </h4>
          </div>

          <div className={styles.items_div}>
            <span className={styles.input_text}>Nome:</span>
            <InputField type="text" name="name" setValue={setEmail} />
          </div>
          <div className={styles.items_div}>
            <span className={styles.input_text}>Sobrenome:</span>
            <InputField type="text" name="lastname" setValue={setEmail} />
          </div>
          <div className={styles.items_div}>
            <span className={styles.input_text}>Email:</span>
            <InputField
              type="email"
              described="emailHelp"
              name="email"
              setValue={setEmail}
            />
          </div>
          <div className={styles.items_div}>
            <span className={styles.input_text}>Senha:</span>
            <InputField type="password" name="senha" setValue={setPassword} />
          </div>
          <div className={styles.items_div}>
            <span className={styles.input_text}>Confirme sua senha:</span>
            <InputField type="password" name="senha" setValue={setPassword} />
          </div>

          <div className={styles.items_div}>
            <SubmitBtn
              text="Registrar"
              onClick={() => onHandleRegister(email, password)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
