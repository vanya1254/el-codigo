import React, { useContext } from "react";

import { AppContext } from "../../context";

import { StartComponent } from "../";

import styles from "./GameBlock.module.scss";
import { HintComponent } from "../HintComponent";

export const GameBlock: React.FC = () => {
  const { startIsClicked } = useContext(AppContext);

  return (
    <div className={styles.root}>
      {startIsClicked ? <HintComponent /> : <StartComponent />}
    </div>
  );
};
