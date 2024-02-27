import React from "react";
import { TopBarPlateType } from "./components/TopBarPlate";

export interface IAppContext {
  isDay: boolean;
  isStartEnd: boolean;
  startIsClicked: boolean;
  okIsClicked: boolean;
  goIsClicked: boolean;
  // timer: TopBarPlateType;
  // counter: TopBarPlateType;
  isTimeOver: boolean;
  isEnd: boolean;
  setIsDay: React.Dispatch<React.SetStateAction<boolean>>;
  setIsStartEnd: React.Dispatch<React.SetStateAction<boolean>>;
  setStartIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
  setOkIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
  setGoIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
  // setTimer: React.Dispatch<React.SetStateAction<TopBarPlateType>>;
  // setCounter: React.Dispatch<React.SetStateAction<TopBarPlateType>>;
  setIsTimeOver: React.Dispatch<React.SetStateAction<boolean>>;
  setIsEnd: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultState = {
  isDay: true,
  isStartEnd: true,
  startIsClicked: false,
  okIsClicked: false,
  goIsClicked: false,
  // timer: {
  //   img: "",
  //   sencation: "",
  //   firstValue: "",
  //   secondValue: "",
  // },
  // counter: {
  //   img: "",
  //   sencation: "",
  //   firstValue: "",
  //   secondValue: "",
  // },
  isTimeOver: false,
  isEnd: false,
  setIsDay: () => {},
  setIsStartEnd: () => {},
  setStartIsClicked: () => {},
  setOkIsClicked: () => {},
  setGoIsClicked: () => {},
  // setTimer: () => {},
  // setCounter: () => {},
  setIsTimeOver: () => {},
  setIsEnd: () => {},
};

export const AppContext = React.createContext<IAppContext>(defaultState);
