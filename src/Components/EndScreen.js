import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Context";
import { Question } from "../Helpers/QuestionBank";
import "../App.css";

function EndScreen() {
  const { score, setScore, setGameState } = useContext(QuizContext);
  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  };
  return (
    <div className="EndScreen">
      <h1>Quiz Finished</h1>
      <h2>
        {score}/{Question.length}
      </h2>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
}

export default EndScreen;
