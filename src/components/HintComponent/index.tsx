import React, { useContext } from "react";

import { AppContext } from "../../context";

import { ElButton } from "../";

import styles from "./HintComponent.module.scss";

export const HintComponent: React.FC = () => {
  const { okIsClicked, setOkIsClicked, setGoIsClicked } =
    useContext(AppContext);

  const onClickOk = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setOkIsClicked((prev) => !prev);
  };

  const onClickGo = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setGoIsClicked((prev) => !prev);
  };

  const texts = {
    ok: "Нажимай на НЛО и отравляй их В ДАЛЕКИЙ КОСМОС!",
    go: "НО НЕ ВСЕ ИНОПЛАНЕТЯНЕ ЗЛЫЕ. КТО-то ПРОСТО УСТАЛ ИЛИ ЗАБОЛЕЛ. ДАЙ ИМ ПРОСТО УЛЕТЕТЬ И ВСЁ БУДЕТ ХОРОШО!",
  };
  const btnTexts = {
    ok: "ясно",
    go: "погнали",
  };

  return (
    <div className={`${styles.root} selectDisabled`}>
      <div className={styles.root__animation}>
        <div
          className={
            okIsClicked
              ? styles.root__animation_shipHandYellow
              : styles.root__animation_shipHandGreen
          }
        ></div>
      </div>
      <div className={styles.root__content}>
        <p className={styles.root__content_text}>
          {okIsClicked ? texts.go : texts.ok}
        </p>
        <ElButton
          text={okIsClicked ? btnTexts.go : btnTexts.ok}
          onClick={okIsClicked ? (e) => onClickGo(e) : (e) => onClickOk(e)}
        />
      </div>
    </div>
  );
};
