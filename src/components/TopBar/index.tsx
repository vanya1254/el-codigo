import React from "react";

import { TopBarPlate } from "../";
import { TopBarPlateType } from "../TopBarPlate";

import styles from "./TopBar.module.scss";

export type TopBarProps = {
  timer: TopBarPlateType;
  counter: TopBarPlateType;
};

export const TopBar: React.FC<TopBarProps> = ({ timer, counter }) => {
  return (
    <div className={styles.root}>
      <TopBarPlate {...counter} />
      <TopBarPlate {...timer} />
    </div>
  );
};
