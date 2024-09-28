import { useState } from "react"
import Answers from "./Answers"
import QuestionTimer from "./QuestionTimer"
import Questions from "../Questions"


export default function({
    Index,
    onSelectSkip,
    onSelectAnswer

}){

  const [answer,setAnswer] = useState({
    selectedAnswer:'',
    isCorrect:null
  })

  function handleSelectAnswer(answer){
    setAnswer({
      selectedAnswer:answer,
      isCorrect:null
    })

    setTimeout(() => {
      setAnswer({
        selectedAnswer:answer,
        isCorrect:Questions[Index].answers[0]
      })

      setTimeout(()=>{
        onSelectAnswer(answer)

      },2000)
    }, 1000);
  }

  let answerState='';

  if (answer.selectedAnswer){
    answerState = answer.isCorrect ? 'correct' : 'wrong';
  }else if(answer.selectedAnswer){
    answerState = 'answered'
  }

    return(
        <div id="question">
        {/* no answer per automatic null dal dega array me */}
        <QuestionTimer
          
          Timeout={15000}
          onTimeout={onSelectSkip}
        />
        <h2>{Questions[Index]?.text}</h2>

        <Answers 
      
      
      answers={Questions[Index].answers}
      selectanswer={answer.selectedAnswer}
      highlightCorrectAnswer={answerState}
      onSelect={handleSelectAnswer}
      />
      </div>
    
    )
}