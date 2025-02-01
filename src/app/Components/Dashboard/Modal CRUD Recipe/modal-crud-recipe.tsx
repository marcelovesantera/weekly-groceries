import React, { useState } from "react";
import Modal from "react-modal";
import styles from "./modal-crud-recipe.module.css";
import Image, { StaticImageData } from "next/image";
import ActionBtn from "../Action Button/action-btn";
import { IRecipe } from "@/shared/interfaces/recipe";
import InputField from "../Input Field/input-field";
import { User } from "lucide-react";
// import recipeRef from "@/app/Images/receitaRef.jpg";

type Props = {
  isOpen: boolean;
  onRequestClose: (action: string) => void;
  receitas: IRecipe[];
  setReceitas: (value: IRecipe[]) => void;
};

const ModalCRUDRecipe = ({
  isOpen,
  onRequestClose,
  receitas,
  setReceitas,
}: Props) => {
  const [newRecipe, setNewRecipe] = useState<IRecipe>({});

  console.log(receitas, setReceitas);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setNewRecipe({
          ...newRecipe,
          img: e.target?.result as string,
        });
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const onClickClose = (res: string) => {
    onRequestClose(res);
  };

  function TypeOf(img: string | StaticImageData | undefined) {
    if (typeof img === "string") {
      return "string";
    } else if (img && typeof img === "object" && "src" in img) {
      return "StaticImageData";
    } else {
      return "undefined";
    }
  }

  const onClickSaveRecipe = () => {
    console.log("Saved");
  };

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
                  {TypeOf(newRecipe.img) === "StaticImageData" ? (
                    <Image
                      className={styles.image}
                      src={newRecipe.img || "/path/to/default/image.jpg"}
                      alt="Recipe Image"
                    />
                  ) : (
                    <User size={48} />
                  )}
                </div>
                <input
                  className={styles.upload_input}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
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
              <div className={styles.items_div}>
                <span className={styles.input_text}>Número de Porções:</span>
                <InputField
                  type="text"
                  name="portionsMax"
                  setValue={(value: string) =>
                    setNewRecipe({ ...newRecipe, portionsMax: parseInt(value) })
                  }
                />
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
