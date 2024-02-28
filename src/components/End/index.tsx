import React, { useEffect, useContext } from "react";

import { AppContext } from "../../context";

import styles from "./End.module.scss";

export const End: React.FC = () => {
  const { setIsDay, setIsStartEnd, setIsEnd } = useContext(AppContext);

  useEffect(() => {
    setTimeout(() => {
      setIsDay(false);
      setIsStartEnd(false);
      setIsEnd(true);
    }, 2000);
  }, []);

  return (
    <div className={styles.root}>
      <h1 className={styles.root_title}>Конец!</h1>
      <p className={styles.root_text}>ПОРА УЗНАТЬ РЕЗУЛЬТАТ...</p>
    </div>
  );
};
