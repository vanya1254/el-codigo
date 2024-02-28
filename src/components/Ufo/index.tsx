import React, { useEffect, useRef, useState } from "react";

import { getRandomNumber, randomChoice } from "../../utils";

import ufo1 from "../../assets/img/shipBeige_manned.png";
import ufo2 from "../../assets/img/shipBlue_manned.png";
import ufo3 from "../../assets/img/shipGreen_manned.png";
import ufo4 from "../../assets/img/shipPink_manned.png";
import ufo5 from "../../assets/img/shipYellow_manned.png";

import styles from "./Ufo.module.scss";

export enum TypeUfo {
  GOOD = "good",
  BAD = "bad",
}

export type UfoType = {
  type: TypeUfo;
  phrase: string;
  img: string;
};

export const goodPhrases = [
  "ХОЧУ ДОМОй...",
  `ГОВОРИЛА МНЕ МАМА
  ДАЛЕКО НЕ
  УЛЕТАТЬ...`,
  `КУДА Я ЛЕЧУ?
  ЗАЧЕМ? ДЛЯ ЧЕГО?`,
  `У ВАС ЕСТЬ МАКАРОНЫ
  ПО СКИДКЕ?`,
  `НА ПОСЛЕДНИЙ АВТОБУС
  НЕ УСПЕВАЮ...`,
];

export const badPhrases = [
  `Я ПРИшел с
  миром!!!
  или нет...`,
  "Я ЗАХВАЧУ ПИЦЦУ!.",
  `ААААААААААААА
  ААААААААА!!!!`,
  "ЗА ПЛУТОН!!",
  "УКРАДУ ГАРАЖ!",
];

export const imgUfos = [ufo1, ufo2, ufo3, ufo4, ufo5];

export type UfoProps = {
  delay: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
};

export const Ufo: React.FC<UfoProps> = ({ delay, setScore }) => {
  const [isCaught, setIsCaught] = useState(false);
  const ufoRef = useRef<HTMLDivElement | null>(null);

  const rndImg = randomChoice(imgUfos);
  const rndType = getRandomNumber(0, 1) ? TypeUfo.GOOD : TypeUfo.BAD;
  const rndStyle = getRandomNumber(1, 10);
  const rndPhrase =
    rndType === TypeUfo.GOOD
      ? randomChoice(goodPhrases)
      : randomChoice(badPhrases);

  const onClickUfo = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (ufoRef.current !== null && !isCaught) {
      ufoRef.current.style.top = `${e.currentTarget.offsetTop}px`;
      ufoRef.current.style.left = `${e.currentTarget.offsetLeft}px`;
      ufoRef.current.classList.add(styles.tap);
      ufoRef.current.style.animationDelay = "0s";

      if (rndType === TypeUfo.GOOD) {
        setScore((prev) => (prev < 1 ? prev : prev - 1));

        ufoRef.current.classList.add(styles.goodTap);
      } else {
        setScore((prev) => prev + 1);

        ufoRef.current.classList.add(styles.badTap);
      }

      setIsCaught(true);
    }
  };

  useEffect(() => {
    if (ufoRef.current) {
      ufoRef.current.style.animationDelay = `${delay}s`;

      ufoRef.current.style.backgroundImage = `url('${rndImg}')`;
      ufoRef.current.classList.add(
        styles[`${rndPhrase.length > 29 ? "bigPhrase" : "smallPhrase"}`]
      );
      ufoRef.current.dataset.content = rndPhrase;
      ufoRef.current.classList.add(styles[`root_${rndStyle}`]);
    }
  }, []);

  return (
    <div
      ref={ufoRef}
      onClick={(e) => onClickUfo(e)}
      className={`${styles.root} `}
    ></div>
  );
};
