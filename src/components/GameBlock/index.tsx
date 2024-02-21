import React, { useContext } from "react";

import { AppContext } from "../../context";

import { StartComponent, HintComponent, Game } from "../";

import styles from "./GameBlock.module.scss";

export const GameBlock: React.FC = () => {
  const { startIsClicked, goIsClicked } = useContext(AppContext);

  return (
    <div className={styles.root}>
      {goIsClicked ? (
        <Game />
      ) : startIsClicked ? (
        <HintComponent />
      ) : (
        <StartComponent />
      )}
    </div>
  );
};
