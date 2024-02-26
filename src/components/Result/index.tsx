import React from "react";

import styles from "./Result.module.scss";
import { TopBar } from "../TopBar/index";

export const Result: React.FC = () => {
  return (
    <div className={`${styles.root} selectDisabled`}>
      <TopBar />
      <div className={styles.root__text}>
        <h1 className={styles.root__text_title}>Конец!</h1>
        <p className={styles.root__text_text}>ПОРА УЗНАТЬ РЕЗУЛЬТАТ...</p>
      </div>
    </div>
  );
};
