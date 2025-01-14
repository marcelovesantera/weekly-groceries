"use client";

import LoginForm from "@/app/components/Auth/LoginForm";
import styles from "./page.module.css";

const LoginPage = () => {
  const handleLogin = (email: string, password: string) => {
    console.log("Login attempt:", { email, password });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.formSection}>
        <h1 className={styles.heading}>Bem-vindo ao Weekly Groceries!</h1>
        <p>
          Já tem uma conta?{" "}
          <a className={styles.link} href="/auth/login">
            Entrar
          </a>
        </p>
        <LoginForm onSubmit={handleLogin} />
      </div>
      <div className={styles.imageSection}></div>
    </div>
  );
};

export default LoginPage;
