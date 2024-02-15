import React, { useContext, useState } from "react";

import { AppContext } from "../../context";

import shipGreenImg from "../../assets/img/shipGreen_manned.png";
import shipGreenBubbleImg from "../../assets/img/shipGreen-case.png";
import shipYellowImg from "../../assets/img/shipYellow_manned.png";
import shipYellowBubbleImg from "../../assets/img/shipYellow-case.png";
import handImg from "../../assets/img/hand.png";
import handClickImg from "../../assets/img/handClick.png";

import styles from "./HintComponent.module.scss";
import { ElButton } from "../ElButton";

export const HintComponent: React.FC = () => {
  const { okIsClicked, setOkIsClicked } = useContext(AppContext);

  const onClickOk = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setOkIsClicked((prev) => !prev);
  };

  const onClickGo = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {};

  return (
    <div className={styles.root}>
      <div className={styles.root__animation}>
        <img
          className={styles.root__animation_ship}
          src={okIsClicked ? shipYellowImg : shipGreenImg}
          alt="alien"
        />
        <img className={styles.root__animation_hand} src={handImg} alt="hand" />
      </div>
      <div className={styles.root__content}>
        <p className={styles.root__content_text}>
          {okIsClicked
            ? "НО НЕ ВСЕ ИНОПЛАНЕТЯНЕ ЗЛЫЕ. КТО-то ПРОСТО УСТАЛ ИЛИ ЗАБОЛЕЛ. ДАЙ ИМ ПРОСТО УЛЕТЕТЬ И ВСЁ БУДЕТ ХОРОШО!"
            : "Нажимай на НЛО и отравляй их В ДАЛЕКИЙ КОСМОС!"}
        </p>
        <ElButton
          text={okIsClicked ? "погнали" : "ясно"}
          onClick={okIsClicked ? (e) => onClickGo(e) : (e) => onClickOk(e)}
        />
      </div>
    </div>
  );
};
