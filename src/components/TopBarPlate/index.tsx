import React from "react";

import styles from "./TopBarPlate.module.scss";

// export enum TypePlate {
//   TIMER = "timer",
//   COUNTER = "counter",
// }

export type TopBarPlateType = {
  img: string;
  sencation: string;
  firstValue: string;
  secondValue: string;
  // TODO: criticalValue: boolean;
};

export const TopBarPlate: React.FC<TopBarPlateType> = ({
  img,
  firstValue,
  sencation,
  secondValue,
}) => {
  return (
    <div className={styles.root}>
      <img className={styles.root_ship} src={img} alt="ship green" />
      <p className={styles.root__count}>
        <span>{firstValue}</span>
        {sencation}
        <span>{secondValue}</span>
      </p>
    </div>
  );
};
