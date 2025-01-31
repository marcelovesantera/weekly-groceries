import styles from "./navigation-bar.module.css";
import Image from "next/image";
import userProfile from "@/app/Images/userProfile.jpg";
import logoImg from "@/app/Images/groceries_logo.png";

const NavigationBar = () => {
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
          <span className={styles.nav_user_name}>Fulano Detal</span>
          <div className={styles.nav_user_img_div}>
            <Image
              className={styles.nav_user_img}
              src={userProfile}
              alt="User Profile"
            />
          </div>
        </div>
      </nav>
    </section>
  );
};

export default NavigationBar;
