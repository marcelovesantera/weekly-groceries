import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import styles from "./modal-crud-recipe.module.css";
import Image from "next/image";
// import Image, { StaticImageData } from "next/image";
import ActionBtn from "../Action Button/action-btn";
import { IRecipe } from "@/app/shared/interfaces/recipe";
import InputField from "../Input Field/input-field";
// import { Upload } from "lucide-react";
import recipeRef from "@/app/Images/receitaRef.jpg";
import { generateFakeID } from "@/app/utils/generateFakeID";

const tiposRefeicao = [
  "",
  "Café da Manhã",
  "Almoço",
  "Lanche da Tarde",
  "Jantar",
] as const;

type Props = {
  isOpen: boolean;
  onRequestClose: (action: string) => void;
  receitasDB: IRecipe[];
  setReceitasDB: (value: IRecipe[]) => void;
};

const ModalCRUDRecipe = ({
  isOpen,
  onRequestClose,
  receitasDB,
  setReceitasDB,
}: Props) => {
  const [newRecipe, setNewRecipe] = useState<IRecipe>({
    img: recipeRef,
    type: "",
  });

  // const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   if (event.target.files && event.target.files[0]) {
  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //       setNewRecipe({
  //         ...newRecipe,
  //         img: e.target?.result as string,
  //       });
  //     };
  //     reader.readAsDataURL(event.target.files[0]);
  //   }
  // };

  const onClickClose = (res: string) => {
    onRequestClose(res);
  };

  // function TypeOf(img: string | StaticImageData | undefined) {
  //   if (typeof img === "string") {
  //     return "string";
  //   } else if (img && typeof img === "object" && "src" in img) {
  //     return "StaticImageData";
  //   } else {
  //     return "undefined";
  //   }
  // }

  const onClickSaveRecipe = () => {
    setReceitasDB([...receitasDB, { ...newRecipe, id: generateFakeID() }]);
  };

  useEffect(() => {
    setNewRecipe({ img: recipeRef, type: "" });
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      className={styles.modal}
      overlayClassName={styles.overlay}
      ariaHideApp={false}
    >
      <div className={styles.div_crud_recipe}>
        <div className={styles.div_actions}>
          <ActionBtn
            type="submit"
            text="Voltar"
            onClick={() => onClickClose("MyRecipes")}
          />
        </div>
        <div className={`${styles.div_recipes}`}>
          <div className={`${styles.header}`}>
            <p className={styles.title}>Criar nova receita</p>
          </div>
          <div className={`${styles.section_inputs}`}>
            <div className={styles.imageUpload}>
              <label className={styles.upload_label}>
                <div className={styles.upload_icon}>
                  {/* {TypeOf(newRecipe.img) === "StaticImageData" ? (
                    <Image
                      className={styles.image}
                      src={newRecipe.img || "/path/to/default/image.jpg"}
                      alt="Recipe Image"
                    />
                  ) : (
                    <Upload size={48} />
                  )} */}
                  <Image
                    className={styles.image}
                    src={newRecipe.img || "/path/to/default/image.jpg"}
                    alt="Recipe Image"
                  />
                </div>
                {/* <input
                  className={styles.upload_input}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                /> */}
              </label>
            </div>
            <div className={styles.inputs_div}>
              <div className={styles.items_div}>
                <span className={styles.input_text}>Título da Receita:</span>
                <InputField
                  type="text"
                  name="title"
                  setValue={(title: string) =>
                    setNewRecipe({ ...newRecipe, title })
                  }
                />
              </div>
              <div className={styles.multi_items_div}>
                <div className={styles.items_div}>
                  <span className={styles.input_text}>Tipo Refeição:</span>
                  <select
                    className={styles.select_input}
                    name="type"
                    onChange={(e) =>
                      setNewRecipe({
                        ...newRecipe,
                        type: e.target.value,
                      })
                    }
                  >
                    {tiposRefeicao.map((tipo) => (
                      <option key={tipo} value={tipo}>
                        {tipo}
                      </option>
                    ))}
                  </select>
                </div>
                <div className={`${styles.items_div} ${styles.items_div_alt}`}>
                  <span className={styles.input_text}>Porções:</span>
                  <InputField
                    type="text"
                    name="portionsMax"
                    setValue={(value: string) =>
                      setNewRecipe({
                        ...newRecipe,
                        portionsMax: parseInt(value),
                        portions: parseInt(value),
                      })
                    }
                  />
                </div>
              </div>
            </div>
            <div className={styles.description_div}>
              <span className={styles.input_text}>Descrição:</span>
              <textarea className={styles.description} name="description" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.modal_btns}>
        <ActionBtn
          type="submit"
          text="Salvar Receita"
          onClick={() => onClickSaveRecipe()}
        />
        <ActionBtn
          type="close"
          text="Fechar"
          onClick={() => onClickClose("Close")}
        />
      </div>
    </Modal>
  );
};

export default ModalCRUDRecipe;
