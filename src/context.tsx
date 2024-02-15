import React from "react";

export interface IAppContext {
  isDay: boolean;
  isStartEnd: boolean;
  startIsClicked: boolean;
  okIsClicked: boolean;
  setIsDay: React.Dispatch<React.SetStateAction<boolean>>;
  setIsStartEnd: React.Dispatch<React.SetStateAction<boolean>>;
  setStartIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
  setOkIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultState = {
  isDay: true,
  isStartEnd: true,
  startIsClicked: false,
  okIsClicked: false,
  setIsDay: () => {},
  setIsStartEnd: () => {},
  setStartIsClicked: () => {},
  setOkIsClicked: () => {},
};

export const AppContext = React.createContext<IAppContext>(defaultState);
