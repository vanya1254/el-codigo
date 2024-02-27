import React, { useContext, useEffect, useState } from "react";

import { TopBarPlate } from "../";

import { AppContext } from "../../context";

import timerImg from "../../assets/img/timer.png";
import shipImg from "../../assets/img/shipGreen_manned.png";

import styles from "./TopBar.module.scss";

export type TopBarProps = {
  score: number;
};

export const TopBar: React.FC<TopBarProps> = ({ score }) => {
  const { setIsStartEnd, setIsTimeOver, isTimeOver } = useContext(AppContext);

  const [timer, setTimer] = useState({
    img: timerImg,
    sencation: ":",
    firstValue: "00",
    secondValue: "30",
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
          setIsTimeOver(true);
          setIsStartEnd(true);

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

  useEffect(() => {
    if (score >= 10 || score < 0) {
      setCounter((prev) => {
        return {
          img: prev.img,
          sencation: prev.sencation,
          firstValue: `${score}`,
          secondValue: prev.secondValue,
        };
      });
    } else {
      setCounter((prev) => {
        return {
          img: prev.img,
          sencation: prev.sencation,
          firstValue: `0${score}`,
          secondValue: prev.secondValue,
        };
      });
    }
  }, [score]);

  return (
    <div className={`${styles.root} selectDisabled`}>
      <TopBarPlate {...counter} />
      <TopBarPlate {...timer} />
    </div>
  );
};
