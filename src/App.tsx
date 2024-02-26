import React, { useState } from "react";

import { AppContext } from "./context";

import { Background, GameBlock } from "./components";

import "./App.css";

const App: React.FC = () => {
  const [isDay, setIsDay] = useState(true);
  const [isStartEnd, setIsStartEnd] = useState(true);
  const [startIsClicked, setStartIsClicked] = useState(false);
  const [okIsClicked, setOkIsClicked] = useState(false);
  const [goIsClicked, setGoIsClicked] = useState(false);
  const [isTimeOver, setIsTimeOver] = useState(false);

  return (
    <AppContext.Provider
      value={{
        isDay,
        isStartEnd,
        startIsClicked,
        okIsClicked,
        goIsClicked,
        // timer,
        // counter,
        isTimeOver,
        setIsDay,
        setIsStartEnd,
        setStartIsClicked,
        setOkIsClicked,
        setGoIsClicked,
        // setTimer,
        // setCounter,
        setIsTimeOver,
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
