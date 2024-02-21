import React, { useState } from "react";

import { AppContext } from "./context";

import { Background, GameBlock } from "./components";

import shipImg from "./assets/img/shipGreen_manned.png";
import timerImg from "./assets/img/timer.png";

import "./App.css";

const App: React.FC = () => {
  const [isDay, setIsDay] = useState(true);
  const [isStartEnd, setIsStartEnd] = useState(true);
  const [startIsClicked, setStartIsClicked] = useState(false);
  const [okIsClicked, setOkIsClicked] = useState(false);
  const [goIsClicked, setGoIsClicked] = useState(false);
  const [timer, setTimer] = useState({
    img: timerImg,
    sencation: ":",
    firstValue: "00",
    secondValue: "30",
  });
  const [counter, setCounter] = useState({
    img: shipImg,
    sencation: "/",
    firstValue: "00",
    secondValue: "10",
  });

  return (
    <AppContext.Provider
      value={{
        isDay,
        isStartEnd,
        startIsClicked,
        okIsClicked,
        goIsClicked,
        timer,
        counter,
        setIsDay,
        setIsStartEnd,
        setStartIsClicked,
        setOkIsClicked,
        setGoIsClicked,
        setTimer,
        setCounter,
      }}
    >
      <div className="App">
        <Background />
        <GameBlock />
      </div>
    </AppContext.Provider>
  );
};

export default App;
