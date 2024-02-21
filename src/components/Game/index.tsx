import React, { useContext, useEffect } from "react";

import { TopBar, Ufo } from "../";

import { AppContext } from "../../context";

import styles from "./Game.module.scss";
import { TypeUfo } from "../Ufo";

export const Game: React.FC = () => {
  const { setTimer, timer, counter } = useContext(AppContext);

  useEffect(() => {
    const time = setInterval(() => {
      if (Number(timer.secondValue) == 0) {
        return () => clearInterval(time);
      } else if (Number(timer.secondValue) <= 10) {
        setTimer((prev) => {
          return {
            img: prev.img,
            sencation: prev.sencation,
            firstValue: prev.firstValue,
            secondValue: `0${Number(prev.secondValue) - 1}`,
          };
        });
      } else if (Number(timer.secondValue) > 10) {
        setTimer((prev) => {
          return {
            img: prev.img,
            sencation: prev.sencation,
            firstValue: prev.firstValue,
            secondValue: `${Number(prev.secondValue) - 1}`,
          };
        });
      }
    }, 1000);

    return () => {
      clearInterval(time);
    };
  }, [timer]);

  return (
    <div className={styles.root}>
      <TopBar counter={counter} timer={timer} />
      <div className={styles.root__area}>
        <Ufo type={TypeUfo.BAD} />
      </div>
      <div className={styles.root__road}></div>
    </div>
  );
};
