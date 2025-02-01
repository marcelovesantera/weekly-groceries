"use client";

import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import InputField from "@/app/Components/Auth/Input Field/input-field";
import SubmitBtn from "@/app/Components/Auth/Submit Button/submit-btn";
import {
  IRegisterUser,
  IRegisterUserResponse,
} from "@/app/shared/interfaces/user";

const RegisterPage = () => {
  const [register, setRegister] = useState<IRegisterUser>({});
  const [otpCodeDigit, setOtpCodeDigit] = useState<boolean>(false);
  const [otpCode, setOtpCode] = useState<string | null>(null);

  const router = useRouter();

  const emailType = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordType = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;

  const onValidateFields = (input: IRegisterUser): boolean => {
    if (input.firstName === "" || null) {
      alert("Nome é obrigatório");
      return false;
    }

    if (input.lastName === "" || null) {
      alert("Sobrenome é obrigatório");
      return false;
    }

    if (input.email === "" || null) {
      alert("Email é obrigatório");
      return false;
    }

    if (input.password === "" || null) {
      alert("Senha é obrigatória");
      return false;
    }

    if (input.confirmPassword === "" || null) {
      alert("Confirmação de senha é obrigatória");
      return false;
    }

    if (input.password !== input.confirmPassword) {
      alert("Senhas não conferem");
      return false;
    }

    return true;
  };

  const onValidateInput = (input: string, type: string): boolean => {
    if (type === "email") {
      return emailType.test(input);
    }

    if (type === "password") {
      return passwordType.test(input);
    }

    return false;
  };

  const onValidateExistEmail = async (email: string) => {
    try {
      const response = await fetch("/api/check-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.message || "Erro ao verificar email");
      }

      if (resData.message === "Success.") {
        if (resData.details === "Email já existe.") {
          return { emailExist: true, msg: resData.details };
        } else {
          return { emailExist: false, msg: resData.details };
        }
      }
    } catch (error: unknown) {
      alert(
        "Erro ao verificar email: " +
          (error instanceof Error ? error.message : "Erro desconhecido")
      );
      return { emailExist: true, msg: "Erro ao buscar email." };
    }

    return { emailExist: true, msg: "Erro ao buscar email." };
  };

  const onSendOTP = async (email: string) => {
    try {
      const response = await fetch("/api/request-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.message || "Erro ao enviar código");
      }

      if (response.ok && resData.message === "Success.") {
        return "Código enviado com sucesso!";
      }
    } catch (error: unknown) {
      return "Erro ao enviar código: " + error;
    }
  };

  const onHandleRegister = async (input: IRegisterUser) => {
    if (!onValidateFields(input)) {
      return;
    }

    const email = input.email ?? "";
    const { emailExist, msg } = await onValidateExistEmail(email);
    if (emailExist) {
      alert(msg);
      return;
    }

    if (input.password && !onValidateInput(input.password, "password")) {
      alert(
        "Senha inválida: deve conter ao menos 6 caracteres, uma letra maiúscula e um caractere especial"
      );
      return;
    }

    if (input.email && !onValidateExistEmail(input.email)) {
      alert("Email já cadastrado");
      return;
    }

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.message || "Erro ao efetuar cadastro");
      }

      const userData: IRegisterUserResponse = { ...resData.data };
      if (userData.token) {
        alert("Cadastro efetuado com sucesso!");

        const message = await onSendOTP(userData.email);

        if (message === "Código enviado com sucesso!") {
          setOtpCodeDigit(true);
        } else {
          throw new Error(
            message +
              " Entre em contato com o suporte pelo email motiondes.tech@gmail.com"
          );
        }
      } else {
        throw new Error("Erro ao efetuar cadastro.");
      }
    } catch (error: unknown) {
      alert("Erro ao efetuar cadastro: " + error);
    }
  };

  const onValidateOTP = async (email: string, otpCode: string) => {
    try {
      const response = await fetch("/api/validate-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otpCode }),
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.message || "Erro ao validar código");
      }

      if (response.ok && resData.message === "Success.") {
        router.push("/");
      }
    } catch (error: unknown) {
      alert("Erro ao validar código: " + error);
    }
  };

  useEffect(() => {
    setRegister({});
    setOtpCodeDigit(false);
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {!otpCodeDigit ? (
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
                setValue={(firstName: string) =>
                  setRegister({ ...register, firstName })
                }
              />
            </div>
            <div className={styles.items_div}>
              <span className={styles.input_text}>Sobrenome:</span>
              <InputField
                type="text"
                name="lastname"
                setValue={(lastName: string) =>
                  setRegister({ ...register, lastName })
                }
              />
            </div>
            <div className={styles.items_div}>
              <span className={styles.input_text}>Email:</span>
              <InputField
                type="email"
                described="emailHelp"
                name="email"
                setValue={(email: string) =>
                  setRegister({ ...register, email })
                }
              />
            </div>
            <div className={styles.items_div}>
              <span className={styles.input_text}>WhatsApp:</span>
              <InputField
                type="number"
                name="number"
                maxLength={11}
                setValue={(whatsapp: string) =>
                  setRegister({
                    ...register,
                    whatsapp: Number(whatsapp),
                  })
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
        ) : (
          <div className={styles.otp_div}>
            <h4 className={styles.otp_text}>
              Digite o{" "}
              <b className={styles.otp_bold_text}>código de 6 dígitos</b>{" "}
              enviado ao seu email (verifique a caixa de spam):
            </h4>
            <InputField
              type="otp"
              name="otpCode"
              align="center"
              maxLength={6}
              setValue={(otpCode: string) => setOtpCode(otpCode)}
            />
            <SubmitBtn
              text="Validar"
              onClick={() =>
                otpCode &&
                register.email &&
                onValidateOTP(register.email, otpCode)
              }
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default RegisterPage;
