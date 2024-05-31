import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Question from "./Components/Question";
import qBank from "./Components/QuestionBank";
import Score from "./Components/Score";
import "./App.css";

function App() {
  const [questionBank, setQuestionBank] = useState(qBank);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [quizEnd, setQuizEnd] = useState(false);

  function handleSubmit(e){
    e.preventDefault();
    handleCheck();
    handleNext();
  }
  function handleNext(){
    if (currentQuestion+1 < questionBank.length){
      setCurrentQuestion(currentQuestion + 1)
    }
    else{
      setQuizEnd(true)
    }
    
  }
  function handleOnOptionChange(e){
    setSelectedOption(e.target.value)
  }
  function handleCheck(){
    if (selectedOption === questionBank[currentQuestion].answer){
      setScore(score+1)
    }
  }

  return (
    <div className="Container">
      <h1 className="app-title">QUIZ APP</h1>
      {
        quizEnd ? (
          <Score score = {score}/>
        ):(
          <Question question={questionBank[currentQuestion]}
                handleSubmit ={handleSubmit}
                selectedOption = {selectedOption}
                onOptionChange ={handleOnOptionChange}
      />
        )
      }     
    </div>
  );
}

export default App;

