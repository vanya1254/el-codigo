import React from "react";

import { ElButton } from "../";

import starImg from "../../assets/img/star.png";
import tgLogo from "../../assets/img/telegram.png";
import okLogo from "../../assets/img/odnoklassniki.png";
import vkLogo from "../../assets/img/vk.png";
// import alienLogo from "../../assets/img/shipGreen_manned.png";
// &imageUrl=${alienLogo}
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
  const answers = {
    bad: `теперь понятно, почему тебя не зовут спасать мир.
  попробуешь еще раз?`,
    normal: `ты, конечно, не супергерой, но своё дело знаешь. город еще не спасен.
    попробуешь еще раз?`,
    good: `ЛУЧШИЙ ИЗ ЛУЧШИХ. НАстоящий спаситель человечества.`,
  };

  const typeWin = (() => {
    if (score < 4) {
      return TypeWin.BAD;
    }
    if (score >= 4 && score < 8) {
      return TypeWin.NORMAL;
    }
    if (score >= 8) {
      return TypeWin.GOOD;
    }
  })();

  const result = (() => {
    let res = { stars: [<></>], answer: "" };

    if (TypeWin.BAD === typeWin) {
      res.stars = new Array(1);
      res.answer = answers.bad;
    }
    if (TypeWin.NORMAL === typeWin) {
      res.stars = new Array(2);
      res.answer = answers.normal;
    }
    if (TypeWin.GOOD === typeWin) {
      res.stars = new Array(3);
      res.answer = answers.good;
    }

    res.stars = [...res.stars].map((_, i) => (
      <img
        className={styles.root__stars_img}
        key={i}
        src={starImg}
        alt="star img"
      />
    ));

    return res;
  })();

  const shareText = `Я поймал ${score}/10,
  а тебе слабо?`;

  const onClickAgain = () => {
    window.location.reload();
  };

  return (
    <div className={`${styles.root} selectDisabled`}>
      <div className={styles.root__stars}>{result.stars}</div>
      <div className={styles.root__content}>
        <h3 className={styles.root__content_title}>ПОЙМАНО {score}/10!</h3>
        <p className={styles.root__content_text}>{result.answer}</p>
        <ElButton text="ЕЩЁ РАЗ!" onClick={onClickAgain} />
      </div>
      <article className={styles.root__share}>
        <h4 className={styles.root__share_text}>Поделиться</h4>
        <div className={styles.root__share__links}>
          <a
            href={`https://t.me/share?url=${window.location.href}&text=${shareText}`}
            className={`${styles.root__share_link} telegram`}
          >
            <img src={tgLogo} alt="telegram logo" />
          </a>
          <a
            href={`https://connect.ok.ru/offer?url=url=${window.location.href}&title=${shareText}`}
            className={`${styles.root__share_link} odnoklassniki`}
          >
            <img src={okLogo} alt="odnoklassniki logo" />
          </a>
          <a
            href={`https://vk.com/share.php?url=${window.location.href}&title=${shareText}`}
            className={`${styles.root__share_link} vkontakte`}
          >
            <img src={vkLogo} alt="vkontakte logo" />
          </a>
        </div>
      </article>
    </div>
  );
};
