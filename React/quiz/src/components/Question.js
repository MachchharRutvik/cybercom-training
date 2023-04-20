import React, { useState } from "react";
import "./Question.css";

function RightAnswerComponent({ correctAnswers }) {
  return (
    <div>
      <h2>Quiz Complete!</h2>
      <p>You got {correctAnswers} out of 4 questions correct.</p>
    </div>
  );
}

function Question() {
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "Madrid", "Rome", "Berlin"],
      answer: "Paris",
    },
    {
      question: "What is the largest planet in the solar system?",
      options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
      answer: "Jupiter",
    },
    {
      question: "What is the highest mountain in the world?",
      options: ["Everest", "Kilimanjaro", "Denali", "Aconcagua"],
      answer: "Everest",
    },
    {
      question: "Who wrote the Harry Potter series of books?",
      options: [
        "J.K. Rowling",
        "Stephen King",
        "Dan Brown",
        "George R.R. Martin",
      ],
      answer: "J.K. Rowling",
    },
  ];

  const [ques, setQuestion] = useState(questions[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (que, option) => {
    let question = questions.find((ques) => ques.question === que);
    if (question.answer === option) {
      console.log(question.answer);
      console.log(option);
      setCorrectAnswers(correctAnswers + 1);
    }
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setQuestion(questions[currentIndex + 1]);
    } else {
      // user has answered the last question
      setShowResult(true);
    }
    console.log(correctAnswers);
  };
  const resetHandler = () =>{
    setCurrentIndex(0);
      setQuestion(questions[0]);
      setCorrectAnswers(0);
      setShowResult(false);

  }

  return (
    <div className="container mt-5 border border-black w-75">
     <button className="btn btn-danger" onClick={resetHandler}>Reset</button>
      {showResult ? (
        <RightAnswerComponent correctAnswers={correctAnswers} />
      ) : (
        <>
       

        <div>
          <div className="text-center fw-bold fs-2">{ques.question}</div>
          <div className="option-container">
            <div
              className="border border-secondary m-md-3 rounded-pill p-2 quiz-option text-center"
              onClick={() => handleAnswer(ques.question, ques.options[0])}
            >
              {ques.options[0]}
            </div>
            <div
              className="border border-secondary m-md-3 rounded-pill p-2 quiz-option text-center"
              onClick={() => handleAnswer(ques.question, ques.options[1])}
            >
              {ques.options[1]}
            </div>
            <div
              className="border border-secondary m-md-3 rounded-pill p-2 quiz-option text-center"
              onClick={() => handleAnswer(ques.question, ques.options[2])}
            >
              {ques.options[2]}
            </div>
            <div
              className="border border-secondary m-md-3 rounded-pill p-2 quiz-option text-center"
              onClick={() => handleAnswer(ques.question, ques.options[3])}
            >
              {ques.options[3]}
            </div>
          </div>
        </div>
        </>
      )}
    </div>
  );
}

export default Question;
