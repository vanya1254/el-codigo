import React, { useContext } from "react";

import { AppContext } from "../../context";

import { StartComponent, HintComponent, Game, Result } from "../";

import styles from "./GameBlock.module.scss";

export const GameBlock: React.FC = () => {
  const { startIsClicked, goIsClicked, isTimeOver } = useContext(AppContext);

  return (
    <div className={styles.root}>
      {isTimeOver ? (
        <Result />
      ) : goIsClicked ? (
        <Game />
      ) : startIsClicked ? (
        <HintComponent />
      ) : (
        <StartComponent />
      )}
    </div>
  );
};
