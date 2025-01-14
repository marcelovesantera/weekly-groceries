"use client";

import React, { useState } from "react";
import styles from "./LoginForm.module.css";

interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <div className={styles.inputGroup}>
        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <input
          type="email"
          id="email"
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="password" className={styles.label}>
          Senha
        </label>
        <input
          type="password"
          id="password"
          className={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="remember" />
        <label htmlFor="remember">Lembrar de mim.</label>
      </div>
      <button type="submit" className={styles.button}>
        Login
      </button>
      <p>
        Não tem uma conta?{" "}
        <a className={styles.link} href="/register">
          Cadastre-se
        </a>
      </p>
    </form>
  );
};

export default LoginForm;
