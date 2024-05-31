import React from "react";
import Options from "./Option";
import "./Button.css";

function Question(props) {
  const { question,handleSubmit,selectedOption,onOptionChange} = props;

  return (
    <div className="">
      <h3>Question {question.id} </h3>
      <h5>{question.question}</h5>
      <form onSubmit={handleSubmit}>
        <Options options = {question.options}
            selectedOption={selectedOption}
            onOptionChange = {onOptionChange}
        />
        <button className="Btn" type="submit">SUBMIT</button>
      </form>
      
    </div>
  );
}

export default Question;

