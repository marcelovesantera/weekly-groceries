"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import InputField from "@/app/Components/Auth/Input Field/input-field";
import SubmitBtn from "@/app/Components/Auth/Submit Button/submit-btn";
import Link from "next/link";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState<string>("");
  const emailType = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const onValidateInput = (input: string): boolean => {
    if (input !== "") {
      return emailType.test(input);
    }

    return false;
  };

  const onHandleSubmit = (email: string) => {
    console.log("Email : ", email);

    if (email === "") {
      console.log("Email obrigatório");
      return;
    }

    if (onValidateInput(email)) {
      console.log("Código enviado com sucesso");
    } else {
      console.log("Email inválido");
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.form_div}>
          <div className={styles.text_div}>
            <h4 className={styles.text}>
              Recuperar senha no <b>Weekly Groceries!</b>
            </h4>
          </div>

          <div className={styles.items_div}>
            <InputField
              type="email"
              described="emailHelp"
              placeholder="Digite o seu email..."
              name="email"
              setValue={setEmail}
            />
          </div>

          <div className={styles.items_div}>
            <SubmitBtn
              text="Recuperar senha"
              onClick={() => onHandleSubmit(email)}
            />
          </div>

          <p className={styles.text_link}>
            Já tem uma conta?{" "}
            <Link className={styles.link} href="/login">
              Faça login
            </Link>
          </p>
          <p className={styles.text_link}>
            Não tem uma conta?{" "}
            <Link className={styles.link} href="/register">
              Cadastre-se
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
