import Answers from "./Answers"
import QuestionTimer from "./QuestionTimer"


export default function({onSelectAnswer,
    question,
    answers,
    onSelectSkip,
    userAnsState,
    highlightCorrectAnswer

}){

    return(
        <div id="question">
        {/* no answer per automatic null dal dega array me */}
        <QuestionTimer
          
          Timeout={15000}
          onTimeout={onSelectSkip}
        />
        <h2>{question}</h2>

        <Answers 
      
      
      answers={answers}
      selectanswer={userAnsState}
      highlightCorrectAnswer={highlightCorrectAnswer}
      onSelect={onSelectAnswer}
      />
      </div>
    
    )
}