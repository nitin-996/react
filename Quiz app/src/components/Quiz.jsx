import { useCallback, useState } from "react";
import Questions from "../Questions";
import complete from '../assets/quiz-complete.png'
import QuestionTimer from "./QuestionTimer";


export default function Quiz() {
  // yha answers store kerna h
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers?.length;
  const quizIsComplete = Questions.length === activeQuestionIndex;


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


  const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevValue) => {
      const correctAnswers = [...prevValue, selectedAnswer];
      console.log(correctAnswers);
      
      return correctAnswers;
    });
  })
  const handleSkipAnswer = useCallback(()=>handleSelectAnswer(null),[handleSelectAnswer])

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

                    {/* no answer per automatic null dal dega array me */}
                   <QuestionTimer key={activeQuestionIndex} Timeout={15000} onTimeout={handleSkipAnswer}/>
            <h2>{Questions[activeQuestionIndex]?.text}</h2>
            <ul id="answers">
              {shuffleAnswers.map((answer) => (
                <li key={answer} className="answer">

                  {/* yha answer dene per array me answer push hoga */}
                  <button onClick={() => handleSelectAnswer(answer)}>
                    {answer}
                  </button>
                  
                </li>
              ))}
              
            </ul>
          </div>
        </div>
      )}


