"use client";

import styles from "./page.module.css";
import { useState } from "react";
import { redirect } from "next/navigation";
import NavigationBar from "./Components/Dashboard/navigation-bar";
import ActionBtn from "./Components/Dashboard/action-btn";
import Image from "next/image";
import receitaImg from "@/app/Images/receitaRef.jpg";

export default function HomePage() {
  const [isLogged, setIsLogged] = useState(true);
  console.log(setIsLogged);

  const onRenderDashboard = () => {
    return (
      <>
        <NavigationBar />
        <section className={styles.btns_section}>
          <ActionBtn
            text="Novo Planejamento"
            onClick={() => console.log("Novo Planejamento")}
          />
          <ActionBtn
            text="Minhas Receita"
            onClick={() => console.log("Minhas Receita")}
          />
        </section>
        <section className={styles.grids_section}>
          <div className={styles.grid_planejamento}>
            <div className={styles.grid_header}>
              <p className={styles.grid_title}>Planejamento Semanal</p>
            </div>
            <div className={styles.grid_days}>
              {/* <div className={styles.table_header}>
                <h4 className={styles.days}>Segunda</h4>
                <h4 className={styles.days}>Terça</h4>
                <h4 className={styles.days}>Quarta</h4>
                <h4 className={styles.days}>Quinta</h4>
                <h4 className={styles.days}>Sexta</h4>
                <h4 className={styles.days}>Sábado</h4>
                <h4 className={styles.days}>Domingo</h4>
              </div> */}
              <div className={styles.grid_days_food}>
                <div id="1" className={styles.table_food}>
                  <div className={styles.column_portions}>
                    <h4 className={styles.days}>Segunda</h4>
                    <div className={styles.portion_div}>
                      <div className={styles.receita_img_div}>
                        <Image
                          className={styles.receita_img}
                          src={receitaImg}
                          alt="Receita Icone"
                        />
                      </div>
                      <div className={styles.receita_info_div}>
                        <p className={styles.receita_title}>
                          Frango com batata
                        </p>
                        <span className={styles.portion_text}>Porções: 2x</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="2" className={styles.table_food}>
                  <h4 className={styles.days}>Terça</h4>
                  <div className={styles.portion_div}>
                    <div className={styles.receita_img_div}>
                      <Image
                        className={styles.receita_img}
                        src={receitaImg}
                        alt="Receita Icone"
                      />
                    </div>
                    <div className={styles.receita_info_div}>
                      <p className={styles.receita_title}>Frango com batata</p>
                      <span className={styles.portion_text}>Porções: 2x</span>
                    </div>
                  </div>
                </div>
                <div id="3" className={styles.table_food}>
                  <h4 className={styles.days}>Quarta</h4>
                  <div className={styles.portion_div}>
                    <div className={styles.receita_img_div}>
                      <Image
                        className={styles.receita_img}
                        src={receitaImg}
                        alt="Receita Icone"
                      />
                    </div>
                    <div className={styles.receita_info_div}>
                      <p className={styles.receita_title}>Frango com batata</p>
                      <span className={styles.portion_text}>Porções: 2x</span>
                    </div>
                  </div>
                </div>
                <div id="4" className={styles.table_food}>
                  <h4 className={styles.days}>Quinta</h4>
                  <div className={styles.portion_div}>
                    <div className={styles.receita_img_div}>
                      <Image
                        className={styles.receita_img}
                        src={receitaImg}
                        alt="Receita Icone"
                      />
                    </div>
                    <div className={styles.receita_info_div}>
                      <p className={styles.receita_title}>Frango com batata</p>
                      <span className={styles.portion_text}>Porções: 2x</span>
                    </div>
                  </div>
                </div>
                <div id="5" className={styles.table_food}>
                  <h4 className={styles.days}>Sexta</h4>
                  <div className={styles.portion_div}>
                    <div className={styles.receita_img_div}>
                      <Image
                        className={styles.receita_img}
                        src={receitaImg}
                        alt="Receita Icone"
                      />
                    </div>
                    <div className={styles.receita_info_div}>
                      <p className={styles.receita_title}>Frango com batata</p>
                      <span className={styles.portion_text}>Porções: 2x</span>
                    </div>
                  </div>
                </div>
                <div id="6" className={styles.table_food}>
                  <h4 className={styles.days}>Sábado</h4>
                  <div className={styles.portion_div}>
                    <div className={styles.receita_img_div}>
                      <Image
                        className={styles.receita_img}
                        src={receitaImg}
                        alt="Receita Icone"
                      />
                    </div>
                    <div className={styles.receita_info_div}>
                      <p className={styles.receita_title}>Frango com batata</p>
                      <span className={styles.portion_text}>Porções: 2x</span>
                    </div>
                  </div>
                </div>
                <div id="7" className={styles.table_food}>
                  <h4 className={styles.days}>Domingo</h4>
                  <div className={styles.portion_div}>
                    <div className={styles.receita_img_div}>
                      <Image
                        className={styles.receita_img}
                        src={receitaImg}
                        alt="Receita Icone"
                      />
                    </div>
                    <div className={styles.receita_info_div}>
                      <p className={styles.receita_title}>Frango com batata</p>
                      <span className={styles.portion_text}>Porções: 2x</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.grid_receitas}>
            <div className={styles.grid_header}>
              <p className={styles.grid_title}>Receitas</p>
            </div>
          </div>
        </section>
      </>
    );
  };

  console.log(onRenderDashboard);

  return (
    <div className={styles.body_div}>
      {isLogged ? onRenderDashboard() : redirect("/login")}
    </div>
  );
}
