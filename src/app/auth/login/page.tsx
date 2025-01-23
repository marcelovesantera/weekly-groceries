"use client";

import styles from "./page.module.css";
import { useState } from "react";
import Link from "next/link";
import InputField from "@/app/Components/Auth/input-field";
import SubmitBtn from "@/app/Components/Auth/submit-btn";

type Props = {
  setIsLogged: (value: boolean) => void;
};

const LoginPage = ({ setIsLogged }: Props) => {
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

  const onHandleLogin = (email: string, password: string) => {
    console.log("Login attempt:", { email, password });

    if (email === "" || password === "") {
      console.log("Email e senha são obrigatórios");
      return;
    }

    if (
      onValidateInput(email, "email") &&
      onValidateInput(password, "password")
    ) {
      console.log("Login efetuado com sucesso");
      setIsLogged(true);
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
              Bem-vindo ao <b>Weekly Groceries!</b>
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
            <InputField
              type="password"
              placeholder="Senha"
              name="senha"
              setValue={setPassword}
            />
          </div>

          <div className={styles.items_div}>
            <SubmitBtn
              text="Entrar"
              onClick={() => onHandleLogin(email, password)}
            />
          </div>

          <p className={styles.text_link}>
            Não tem uma conta?{" "}
            <Link className={styles.link} href="/auth/register">
              Cadastre-se
            </Link>
          </p>
          <p className={styles.text_link}>
            Esqueceu sua senha?{" "}
            <Link className={styles.link} href="/auth/forgot-password">
              Recuperar senha
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
