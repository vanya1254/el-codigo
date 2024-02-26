import React, { useContext } from "react";

import { AppContext } from "../../context";

import { ElButton } from "../";

import shipGreenBubbleImg from "../../assets/img/shipGreen-case.png";

import styles from "./StartComponent.module.scss";

export const StartComponent: React.FC = () => {
  const { setStartIsClicked, setIsDay, setIsStartEnd } = useContext(AppContext);

  const onClickStart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setIsStartEnd((prev) => !prev);
    setStartIsClicked((prev) => !prev);
  };

  return (
    <div className={`${styles.root} selectDisabled`}>
      <section className={styles.root__heading}>
        <img
          className={styles.root__heading_img}
          src={shipGreenBubbleImg}
          alt="alien in bubble"
        />
        <h1 className={styles.root__heading_title}>ПОЙМАЙ ПРИШЕЛЬЦА!</h1>
      </section>
      <ElButton text="начать" onClick={(e) => onClickStart(e)} />
    </div>
  );
};
