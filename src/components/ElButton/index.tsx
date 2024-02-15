import React, { MouseEventHandler } from "react";

import bgBtn from "../../assets/img/elBtn.png";

import styles from "./ElButton.module.scss";

export type ElButtonProps = {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const ElButton: React.FC<ElButtonProps> = ({ text, onClick }) => {
  return (
    <button onClick={(e) => onClick(e)} className={styles.root}>
      <img className={styles.root_img} src={bgBtn} alt={`${text} кнопка`} />
      <h2 className={styles.root_text}>{text}</h2>
    </button>
  );
};
