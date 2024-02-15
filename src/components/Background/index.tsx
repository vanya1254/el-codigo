import React, { useContext } from "react";

import { AppContext } from "../../context";

import styles from "./Background.module.scss";

// export type BackgroundProps = {
//   isDay: boolean;
// };

export const Background: React.FC = () => {
  const { isDay, isStartEnd } = useContext(AppContext);

  return (
    <div
      className={`${styles.root} ${
        isDay ? styles.root_day : styles.root_night
      } ${isStartEnd ? styles.root_startEnd : ""}`}
    ></div>
  );
};
