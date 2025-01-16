"use client";

// import LoginForm from "@/app/Components/Auth/LoginForm";
import styles from "./page.module.css";
import Image from "next/image";
import login_image from "@/app/Images/groceries_login.png";

const LoginPage = () => {
  // const handleLogin = (email: string, password: string) => {
  //   console.log("Login attempt:", { email, password });
  // };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.login_img}>
          <Image className={styles.cover} src={login_image} alt="Login" />
        </div>
        <div className={styles.form_div}>
          <div className={styles.text_div}>
            <h4 className={styles.text}>Bem-vindo ao Weekly Groceries!</h4>
          </div>

          <div className={styles.items_div}>
            <input
              className={styles.input}
              type="email"
              aria-describedby="emailHelp"
              placeholder="Digite o seu email..."
              name="email"
            />
          </div>
          <div className={styles.items_div}>
            <input
              className={styles.input}
              type="password"
              placeholder="Senha"
              name="senha"
            />
          </div>
          <div className={styles.items_div}>
            <button className={styles.btn_login} type="submit">
              Entrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
