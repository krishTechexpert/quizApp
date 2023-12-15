import { useRef } from "react";
function Answers({ answers, selectedAnswer, answerState, handleSelectAnswer }) {
  const shuffledAnswers = useRef()

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5)  // values lies between 0-1 and 1 yha per excluded ker hoga esliye minus ker degy -0.5 now values lies between 0 - .50 [with positive and negative values ] so here we have 100 case 
  }

  return <ul id="answers">
    {shuffledAnswers.current.map(answer => {
      let isSelected = selectedAnswer === answer;
      let cssClass = '';
      if (answerState === 'answered' && isSelected) {
        cssClass = 'selected'
      }
      if ((answerState === 'correct' || answerState === 'wrong') && isSelected) {
        cssClass = answerState
      }
      return <li key={answer} className='answer'>
        <button className={cssClass} disabled={answerState !==''} onClick={() => handleSelectAnswer(answer)}>{answer}</button>
      </li>
    })}
  </ul>
}
export default Answers;