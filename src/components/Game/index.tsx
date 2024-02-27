import React, { useContext, useMemo } from "react";

import { TopBar, Ufo, End } from "../";

import { AppContext } from "../../context";

import { getRandomArrayDelays } from "../../utils/RandomUtils";

import styles from "./Game.module.scss";

export type GameProps = {
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
};

export const Game: React.FC<GameProps> = ({ score, setScore }) => {
  const { isTimeOver } = useContext(AppContext);
  // const arrUfoDelays = [0.5, 0.9, 3.5, 3.9, 6.5, 6.9, 9.5, 9.9];

  const handleDelays = useMemo(
    () =>
      [...getRandomArrayDelays(24)].map((delay, i) => (
        <Ufo key={i} delay={delay} setScore={setScore} />
      )),
    []
  );

  return (
    <div className={styles.root}>
      <TopBar score={score} />
      {isTimeOver ? (
        <End />
      ) : (
        <>
          <div className={styles.root__area}>{handleDelays}</div>
          <div className={styles.root__road}></div>
        </>
      )}
    </div>
  );
};
