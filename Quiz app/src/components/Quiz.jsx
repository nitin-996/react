import { useState } from "react";
import Questions from "../Questions";
import complete from '../assets/quiz-complete.png'


export default function Quiz() {
  // yha answers store kerna h
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers?.length;
  const quizIsComplete = Questions.length === activeQuestionIndex;

  function handleSelectedAnswer(selectedAnswer) {
    setUserAnswers((prevValue) => {
      const correctAnswers = [...prevValue, selectedAnswer];
      return correctAnswers;
    });
  }

  if(quizIsComplete){
    return <div id="summary">
      <img src={complete} alt="complete quiz image" />
      <h2>Quiz Completed</h2></div>;
  }
  


  // Shuffle answers for the current question
  const shuffleAnswers = [...Questions[activeQuestionIndex]?.answers];
  shuffleAnswers.sort(() => Math.random() - 0.5);

  return ( 
            <div id="quiz">
          <div id="question">
            <h2>{Questions[activeQuestionIndex]?.text}</h2>
            <ul id="answers">
              {shuffleAnswers.map((answer) => (
                <li key={answer} className="answer">
                  <button onClick={() => handleSelectedAnswer(answer)}>
                    {answer}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}


