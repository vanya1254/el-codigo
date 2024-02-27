import React, { useContext, useState } from "react";

import { AppContext } from "../../context";

import { StartScreen, HintScreen, Game, ResultScreen } from "../";

import styles from "./GameBlock.module.scss";

export const GameBlock: React.FC = () => {
  const { startIsClicked, goIsClicked, isEnd } = useContext(AppContext);
  const [score, setScore] = useState(0);

  return (
    <div className={styles.root}>
      {isEnd ? (
        <ResultScreen score={score} />
      ) : goIsClicked ? (
        <Game score={score} setScore={setScore} />
      ) : startIsClicked ? (
        <HintScreen />
      ) : (
        <StartScreen />
      )}
    </div>
  );
};
