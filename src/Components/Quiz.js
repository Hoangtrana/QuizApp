import React, { useContext, useState } from "react";
import { Question } from "../Helpers/QuestionBank";
import { QuizContext } from "../Helpers/Context";

function Quiz() {
  const { score, setScore, setGameState } = useContext(QuizContext);
  const [currQuestion, setCurrQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const nextQuestion = () => {
    if (Question[currQuestion].answer === optionChosen) {
      setScore(score + 1);
    }

    setCurrQuestion(currQuestion + 1);
  };

  const finishQuiz = () => {
    if (Question[currQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setGameState("endScreen");
  };
  return (
    <div className="Quiz">
      <h2>{Question[currQuestion].prompt}</h2>
      <div className="Option">
        <button onClick={() => setOptionChosen("A")}>
          {Question[currQuestion].optionA}
        </button>
        <button onClick={() => setOptionChosen("B")}>
          {Question[currQuestion].optionB}
        </button>
        <button onClick={() => setOptionChosen("C")}>
          {Question[currQuestion].optionC}
        </button>
        <button onClick={() => setOptionChosen("C")}>
          {Question[currQuestion].optionD}
        </button>
      </div>
      {currQuestion === Question.length - 1 ? (
        <button onClick={finishQuiz}>Finish Quiz</button>
      ) : (
        <button onClick={nextQuestion}>Next Question</button>
      )}
    </div>
  );
}

export default Quiz;
