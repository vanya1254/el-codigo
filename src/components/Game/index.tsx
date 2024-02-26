import React, { useState } from "react";

import { TopBar, Ufo } from "../";

import styles from "./Game.module.scss";

export const Game: React.FC = () => {
  const [score, setScore] = useState(0);

  return (
    <div className={styles.root}>
      <TopBar />
      <div className={styles.root__area}>
        <Ufo />
      </div>
      <div className={styles.root__road}></div>
    </div>
  );
};
