import { useState } from "react";
import Questions from "../Questions";

export default function Quiz() {
  // yha answers store kerna h
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuesionIndex = userAnswers?.length;

  function handleSelectedAnswer(selectedAnswer) {
    setUserAnswers((prevalue) => {
      const CorrectAnswers = [...prevalue , selectedAnswer];
      return CorrectAnswers
      
    });
  }

  
  const random = (Questions)=>Questions[activeQuesionIndex].answers.sort(()=>Math.random - 0.5)
  

  return (
    <div id='quiz'>
        <div id="question">
      <h2>{Questions[activeQuesionIndex].text}</h2>
      <ul id="answers">
        {random.map((answer) => 
        
        {
          return (
            <li key={answer} className="answer">
              <button onClick={()=>handleSelectedAnswer(answer)

              }>{random(answer)}</button>
            </li>
          );
        })}
      </ul>
    </div>
    </div>
  );
}
