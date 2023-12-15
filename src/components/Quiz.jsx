import {useState,useCallback, useEffect,useRef} from 'react';
import questionList from "../questions.js";
import Question from './Question.jsx';
import QuizSummary from './QuizSummary.jsx';
function Quiz(){

  const [userAnswers,setUserAnswers]=useState([])
  const activeQuestionIndex = userAnswers.length;

    const handleSelectAnswer =useCallback(function handleSelectAnswer(selectedAnswer){
      setUserAnswers(prevUserAnswers => {
        return [...prevUserAnswers,selectedAnswer]
      })
    },[])

    const handleSkipAnswer = useCallback(() =>handleSelectAnswer(null),[handleSelectAnswer])

    const quizIsCompleted = activeQuestionIndex === questionList.length;
    if(quizIsCompleted){
      return <QuizSummary userAnswers={userAnswers} />
    }
    
  return <div id="quiz"> 
   {/* very important key trick
  We can also use the key prop to force React to destroy
  and recreate a component.
  And I wanna do that here for my answers component
  whenever the active question index changes, */}
  <Question key={activeQuestionIndex} index={activeQuestionIndex}  handleSkipAnswer={handleSkipAnswer} handleSelectAnswer={handleSelectAnswer}   />
  
  </div>
}
export default Quiz;