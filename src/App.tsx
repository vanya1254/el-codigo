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
  const [isEnd, setIsEnd] = useState(false);

  return (
    <AppContext.Provider
      value={{
        isDay,
        isStartEnd,
        startIsClicked,
        okIsClicked,
        goIsClicked,
        isTimeOver,
        isEnd,
        setIsDay,
        setIsStartEnd,
        setStartIsClicked,
        setOkIsClicked,
        setGoIsClicked,
        setIsTimeOver,
        setIsEnd,
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
