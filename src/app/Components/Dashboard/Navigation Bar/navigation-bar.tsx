import React from "react";
import styles from "./navigation-bar.module.css";
import Image from "next/image";
import userProfile from "@/app/Images/userProfile.jpg";
import logoImg from "@/app/Images/groceries_logo.png";
import { LogOut } from "lucide-react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

// type Props = {
//   user: {
//     _id: string;
//     email: string;
//     firstName: string;
//     lastName: string;
//   };
// };

// const NavigationBar = ({ user }: Props) => {
const NavigationBar = () => {
  const router = useRouter();

  const onClickLogout = () => {
    Cookies.remove("token");
    router.push("/login");
  };

  return (
    <section className={styles.nav_section}>
      <nav className={styles.nav_bar}>
        <div className={styles.nav_logo_box}>
          <Image className={styles.nav_logo_img} src={logoImg} alt="Logo" />
          <span>
            <b>Weekly Groceries</b>
          </span>
        </div>
        <div className={styles.nav_user_box}>
          <span className={styles.nav_user_name}>Fulano de Tal</span>
          <div className={styles.nav_user_img_div}>
            <Image
              className={styles.nav_user_img}
              src={userProfile}
              alt="User Profile"
            />
          </div>
          <button className={styles.btn_logout} onClick={() => onClickLogout()}>
            <LogOut color="gray" />
          </button>
        </div>
      </nav>
    </section>
  );
};

export default NavigationBar;
