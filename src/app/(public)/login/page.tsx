"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Cookies from "js-cookie";
import Link from "next/link";
import InputField from "@/app/Components/Auth/Input Field/input-field";
import SubmitBtn from "@/app/Components/Auth/Submit Button/submit-btn";
import { IUserLoginResponse } from "@/app/shared/interfaces/user";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const router = useRouter();

  const onHandleLogin = async (email: string, password: string) => {
    if (email === "" || password === "") {
      alert("Email e senha são obrigatórios");
      return;
    }

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.message || "Erro ao efetuar login");
      }

      if (resData.data.token) {
        const userData: IUserLoginResponse = {
          token: resData.data.token,
          _id: resData.data._id,
        };

        Cookies.set("token", userData.token, { expires: 7, secure: true });

        router.push("/");
      } else {
        throw new Error("Email ou senha inválidos");
      }
    } catch (error: unknown) {
      alert("Erro ao efetuar login: " + error);
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
            <Link className={styles.link} href="/register">
              Cadastre-se
            </Link>
          </p>
          <p className={styles.text_link}>
            Esqueceu sua senha?{" "}
            <Link className={styles.link} href="/forgot-password">
              Recuperar senha
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
