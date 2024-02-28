import React from "react";

export interface IAppContext {
  isDay: boolean;
  isStartEnd: boolean;
  startIsClicked: boolean;
  okIsClicked: boolean;
  goIsClicked: boolean;
  isTimeOver: boolean;
  isEnd: boolean;
  setIsDay: React.Dispatch<React.SetStateAction<boolean>>;
  setIsStartEnd: React.Dispatch<React.SetStateAction<boolean>>;
  setStartIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
  setOkIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
  setGoIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
  setIsTimeOver: React.Dispatch<React.SetStateAction<boolean>>;
  setIsEnd: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultState = {
  isDay: true,
  isStartEnd: true,
  startIsClicked: false,
  okIsClicked: false,
  goIsClicked: false,
  isTimeOver: false,
  isEnd: false,
  setIsDay: () => {},
  setIsStartEnd: () => {},
  setStartIsClicked: () => {},
  setOkIsClicked: () => {},
  setGoIsClicked: () => {},
  setIsTimeOver: () => {},
  setIsEnd: () => {},
};

export const AppContext = React.createContext<IAppContext>(defaultState);
