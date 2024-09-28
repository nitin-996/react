import { useRef } from "react";



export default function Answers({
  answers,
  SelectAnswer,
  highlightCorrectAnswer,
  onSelect
}) {

    const shuffleAnswers = useRef();

  // Shuffle answers for the current question
  if (!shuffleAnswers.current) {
    shuffleAnswers.current = [...answers];
    shuffleAnswers.current.sort(() => Math.random() - 0.5);
  }
  return (
    <ul id="answers">
      {shuffleAnswers.current.map((answer) => {
        const isSelected = SelectAnswer === answer;

        let cssStyle = "";
        if (highlightCorrectAnswer === "answered" && isSelected) {
          cssStyle = "selected";
        }

        if (
          (highlightCorrectAnswer === "correct" ||
            highlightCorrectAnswer === "wrong") &&
          isSelected
        ) {
          cssStyle = highlightCorrectAnswer;
        }
        return (
          <li key={answer} className="answer">
            {/* yha answer dene per array me answer push hoga */}

            <button
              className={cssStyle}
              onClick={() => onSelect(answer)}
              disabled={highlightCorrectAnswer !==''}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
