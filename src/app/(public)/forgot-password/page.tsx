"use client";

import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import InputField from "@/app/Components/Auth/Input Field/input-field";
import SubmitBtn from "@/app/Components/Auth/Submit Button/submit-btn";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState<string>("");
  const [otpCodeDigit, setOtpCodeDigit] = useState<boolean>(false);
  const [otpCode, setOtpCode] = useState<string | null>(null);

  const emailType = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const router = useRouter();

  const onValidateInput = (input: string): boolean => {
    if (input !== "") {
      return emailType.test(input);
    }

    return false;
  };

  const onHandleSubmit = async (email: string) => {
    if (email === "") {
      alert("Email obrigatório");
      return;
    }

    if (!onValidateInput(email)) {
      alert("Email inválido");
      return;
    }

    try {
      const response = await fetch("/api/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(
          resData.message || "Erro ao enviar email de recuperação"
        );
      }

      if (response.ok && resData.message === "Success.") {
        setOtpCodeDigit(true);
      }

      alert(resData.details);
      return;
    } catch (error: unknown) {
      alert("Erro ao enviar email de recuperação: " + error);
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
        router.push("/login");
      }
    } catch (error: unknown) {
      alert("Erro ao validar código: " + error);
    }
  };

  useEffect(() => {
    setOtpCodeDigit(false);
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {!otpCodeDigit ? (
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
                otpCode && email !== "" && onValidateOTP(email, otpCode)
              }
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
