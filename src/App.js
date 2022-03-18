import "./App.css";
import React, { useState, useContext } from "react";
import MainMenu from "./Components/MainMenu";
import EndScreen from "./Components/EndScreen";
import Quiz from "./Components/Quiz";
import { QuizContext } from "./Helpers/Context";

function App() {
  const [gameSate, setGameState] = useState("menu");
  const [score, setScore] = useState(0);
  return (
    <div className="App">
      <h1>Finland Culture Quiz</h1>
      <QuizContext.Provider value={{ gameSate, setGameState, score, setScore }}>
        {gameSate === "menu" && <MainMenu />}
        {gameSate === "quiz" && <Quiz />}
        {gameSate === "endScreen" && <EndScreen />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
