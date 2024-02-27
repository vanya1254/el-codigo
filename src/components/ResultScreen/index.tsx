import React from "react";

import { ElButton } from "../";

import starImg from "../../assets/img/star.png";

import styles from "./ResultScreen.module.scss";

export enum TypeWin {
  BAD = "bad",
  NORMAL = "normal",
  GOOD = "good",
}

export type ResultScreenProps = {
  score: number;
};

export const ResultScreen: React.FC<ResultScreenProps> = ({ score }) => {
  const typeWin = (() => {
    if (score < 5) {
      return TypeWin.BAD;
    }
    if (score >= 5 && score < 9) {
      return TypeWin.NORMAL;
    }
    if (score >= 9) {
      return TypeWin.GOOD;
    }
  })();

  const stars = [
    ...new Array(
      (() => {
        if (TypeWin.BAD === typeWin) {
          return 1;
        }
        if (TypeWin.NORMAL === typeWin) {
          return 2;
        }
        if (TypeWin.GOOD === typeWin) {
          return 3;
        }
      })()
    ),
  ].map((_, i) => (
    <img
      className={styles.root__stars_img}
      key={i}
      src={starImg}
      alt="star img"
    />
  ));

  const answer = `ты, конечно, не супергерой, но своё дело знаешь. город еще не спасен.
  попробуешь еще раз?`;

  const onClickAgain = () => {};

  const shareText = `Я поймал ${score}/10,
  а тебе слабо?`;

  return (
    <div className={`${styles.root} selectDisabled`}>
      <div className={styles.root__stars}>{stars}</div>
      <div className={styles.root__content}>
        <h3 className={styles.root__content_title}>ПОЙМАНО {score}/10!</h3>
        <p className={styles.root__content_text}>{answer}</p>
      </div>
      <ElButton text="ЕЩЁ РАЗ!" onClick={onClickAgain} />
      <article className={styles.root__share}>
        <h4 className={styles.root__share_text}>Поделиться</h4>
      </article>
    </div>
  );
};
