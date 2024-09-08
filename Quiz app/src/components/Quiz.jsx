import { useCallback, useRef, useState } from "react"

import Question from './Question'
import complete from "../assets/quiz-complete.png";
import Questions from "../Questions";

export default function Quiz() {
  // yha answers store kerna h
  const [highlightCorrectAnswer, setHighlightCorrectAnswer] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex =
    highlightCorrectAnswer === ""
      ? userAnswers?.length
      : userAnswers.length - 1;
  const quizIsComplete = Questions.length === activeQuestionIndex;
  console.log(activeQuestionIndex);
  

  /* In React, when a parent component re-renders, all of its child components also re-render by default.
   One reason for these re-renders is the change in props passed from the parent to the child.
    If a new instance of a function is passed as a prop to a child component, React considers it a new prop (since it's a new function reference),
   which can trigger a re-render of the child component—even if the function's logic hasn't changed. */

  //  that's why we need to use usecallback hook here

  /*
   When Not to Use useCallback?

  Overuse: While useCallback prevents unnecessary re-renders,
 
  it does add some overhead because React has to keep track of the memoized function.
  If you’re not passing functions as props to child components or if the function doesn’t need to stay stable across renders, 
  then you may not need useCallback.

  Avoid Premature Optimization: If your app is small or doesn’t have performance issues, you don’t always need useCallback. 
  It’s useful when you notice unnecessary re-renders or when you’re working with performance-sensitive code.*/

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      setHighlightCorrectAnswer("answered"); // 1st re-render

      setUserAnswers((prevValue) => {
        const correctAnswers = [...prevValue, selectedAnswer];
        return correctAnswers; // 2nd re-render
      });

      setTimeout(() => {
        const correctAnswer = Questions[activeQuestionIndex].answers[0];

        if (correctAnswer === selectedAnswer) {
          setHighlightCorrectAnswer("correct"); //3rd re-render
        } else {
          setHighlightCorrectAnswer("wrong"); //3rd re-render
        }

        setTimeout(() => {
          setHighlightCorrectAnswer(""); // 4th re-render
        }, 2000);
      }, 1000);
    },
    [activeQuestionIndex]
  );

  console.log(highlightCorrectAnswer);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={complete} alt="complete quiz image" />
        <h2>Quiz Completed</h2>
      </div>
    );
  }

 

  
  return (
    <div id="quiz">
     <Question
      key={activeQuestionIndex} 
      question={Questions[activeQuestionIndex]?.text}
      answers={Questions[activeQuestionIndex]?.answers}
     onSelectAnswer={handleSelectAnswer}
     onSelectSkip={handleSkipAnswer}
     userAnsState = {userAnswers[userAnswers.length - 1]}
     highlightCorrectAnswer={highlightCorrectAnswer}
     
     />
    </div>
  );
}
