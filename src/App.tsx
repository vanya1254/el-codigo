import React, { useState } from "react";

import { AppContext } from "./context";

import { Background, GameBlock } from "./components";

import "./App.css";

const App: React.FC = () => {
  const [isDay, setIsDay] = useState(true);
  const [isStartEnd, setIsStartEnd] = useState(true);
  const [startIsClicked, setStartIsClicked] = useState(false);
  const [okIsClicked, setOkIsClicked] = useState(false);

  return (
    <AppContext.Provider
      value={{
        isDay,
        isStartEnd,
        startIsClicked,
        okIsClicked,
        setIsDay,
        setIsStartEnd,
        setStartIsClicked,
        setOkIsClicked,
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
