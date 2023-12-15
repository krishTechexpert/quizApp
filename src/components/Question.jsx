import QuizTimer from './QuizTimer.jsx';
import Answers from './Answers.jsx';
import questionList from "../questions.js";
import {useState} from 'react';

export default function Question({handleSkipAnswer,handleSelectAnswer,index}){
  const [answer,setAnswer]=useState({
    selectedAnswer:'',
    isCorrect:null
  })

  let answerState='';
  let timer=10000;
  if(answer.selectedAnswer && answer.isCorrect !==null){
    answerState= answer.isCorrect ? 'correct':'wrong'
    timer=2000;
  } else if(answer.selectedAnswer){
    answerState='answered'
    timer=1000;
  }

function handleCheckAnswer(answer){
  setAnswer(prevAns => {
    return {...prevAns,selectedAnswer:answer,isCorrect:null} 
  })
  setTimeout(() => {  
    setAnswer(prevAns => {
      return {...prevAns,isCorrect:questionList[index].answers[0] === prevAns.selectedAnswer }}) 
    
      setTimeout(() => {
        handleSelectAnswer(answer)
      },2000)

    },1000) 
}

  return <div id="question">
  <QuizTimer timeout={timer} key={timer}  onTimeOut={answer.selectedAnswer === ''? handleSkipAnswer:null} mode={answerState} />
  <h2>{questionList[index].text}</h2>
  
  <Answers  answers={questionList[index].answers} selectedAnswer={answer.selectedAnswer}  answerState={answerState} handleSelectAnswer={handleCheckAnswer} />
</div>
}