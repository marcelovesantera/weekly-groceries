"use client";

import styles from "./page.module.css";
import { useState } from "react";
import InputField from "@/app/Components/Auth/input-field";
import SubmitBtn from "@/app/Components/Auth/submit-btn";
import Link from "next/link";

type NewRegister = {
  name?: string;
  lastname?: string;
  email?: string;
  whatsapp?: string;
  password?: string;
  confirmPassword?: string;
};

const RegisterPage = () => {
  const [register, setRegister] = useState<NewRegister>({});

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

  const onHandleRegister = (input: NewRegister) => {
    console.log("Register attempt:", { ...input });

    if (
      input.name === "" ||
      input.lastname === "" ||
      input.email === "" ||
      input.password === "" ||
      input.confirmPassword === ""
    ) {
      console.log("Email e senha são obrigatórios");
      return;
    }

    if (input.password !== input.confirmPassword) {
      console.log("Senhas não conferem");
      return;
    }

    if (
      input.email &&
      onValidateInput(input.email, "email") &&
      input.password &&
      onValidateInput(input.password, "password")
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
            <InputField
              type="text"
              name="name"
              setValue={(name: string) => setRegister({ ...register, name })}
            />
          </div>
          <div className={styles.items_div}>
            <span className={styles.input_text}>Sobrenome:</span>
            <InputField
              type="text"
              name="lastname"
              setValue={(lastname: string) =>
                setRegister({ ...register, lastname })
              }
            />
          </div>
          <div className={styles.items_div}>
            <span className={styles.input_text}>Email:</span>
            <InputField
              type="email"
              described="emailHelp"
              name="email"
              setValue={(email: string) => setRegister({ ...register, email })}
            />
          </div>
          <div className={styles.items_div}>
            <span className={styles.input_text}>WhatsApp:</span>
            <InputField
              type="whatsapp"
              name="whatsapp"
              setValue={(whatsapp: string) =>
                setRegister({ ...register, whatsapp })
              }
            />
          </div>
          <div className={styles.items_div}>
            <span className={styles.input_text}>Senha:</span>
            <InputField
              type="password"
              name="password"
              setValue={(password: string) =>
                setRegister({ ...register, password })
              }
            />
          </div>
          <div className={styles.items_div}>
            <span className={styles.input_text}>Confirme sua senha:</span>
            <InputField
              type="password"
              name="confirmPassword"
              setValue={(confirmPassword: string) =>
                setRegister({ ...register, confirmPassword })
              }
            />
          </div>

          <div className={styles.items_div}>
            <SubmitBtn
              text="Registrar"
              onClick={() => onHandleRegister(register)}
            />
          </div>

          <p className={styles.text_link}>
            Já tem uma conta?{" "}
            <Link className={styles.link} href="/login">
              Faça login
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

export default RegisterPage;
