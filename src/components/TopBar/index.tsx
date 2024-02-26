import React, { useContext, useEffect, useState } from "react";

import { TopBarPlate } from "../";

import shipImg from "../../assets/img/shipGreen_manned.png";
import timerImg from "../../assets/img/timer.png";

import styles from "./TopBar.module.scss";
import { AppContext } from "../../context";

export const TopBar: React.FC = () => {
  const { setIsStartEnd, setIsTimeOver, isTimeOver } = useContext(AppContext);

  const [timer, setTimer] = useState({
    img: timerImg,
    sencation: ":",
    firstValue: "00",
    secondValue: "3",
  });
  const [counter, setCounter] = useState({
    img: shipImg,
    sencation: "/",
    firstValue: "00",
    secondValue: "10",
  });

  useEffect(() => {
    if (!isTimeOver) {
      const time = setInterval(() => {
        if (Number(timer.secondValue) == 0) {
          setIsTimeOver((prev) => !prev);
          setIsStartEnd((prev) => !prev);
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
    }
  }, [timer]);

  return (
    <div className={`${styles.root} selectDisabled`}>
      <TopBarPlate {...counter} />
      <TopBarPlate {...timer} />
    </div>
  );
};
