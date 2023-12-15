import quizComplete from "../assets/quiz-complete.png";
import questionList from "../questions.js";
export default function QuizSummary({userAnswers}){
  const skippedAnswer = userAnswers.filter(answer => answer === null)
  const correctAnswer = userAnswers.filter((answer,index) => answer === questionList[index].answers[0])
  const countSkippedAnswer = Math.round((skippedAnswer.length/userAnswers.length)*100)
  const countCorrectAnswer = Math.round((correctAnswer.length/userAnswers.length)*100)
  const countWronganswer = 100 - countSkippedAnswer - countCorrectAnswer;

  return <div id="summary">
          <img src={quizComplete} alt="Trophy icon" />
          <h2>Quiz Completed</h2>
          <div id="summary-stats">
              <p>
                <span className="number">{countSkippedAnswer}%</span>
                <span className="text">skipped</span>
              </p>
              <p>
                <span className="number">{countCorrectAnswer}%</span>
                <span className="text">answered correctly</span>
              </p>
              <p>
                <span className="number">{countWronganswer}%</span>
                <span className="text">answered incorrectly</span>
              </p>
          </div>
          <ol>
            { userAnswers.map((answer,index) => {
              let cssClass='user-answer';
              if(answer === null){
                cssClass +=' skipped'
              } else if(answer === questionList[index].answers[0]){
                cssClass +=' correct'
              }else {
                cssClass +=' wrong'
              }
            return (<li key={index}>
                      <h3>{index+1}</h3>
                      <p className="question">{questionList[index].text}</p>
                      <p className={cssClass}>{answer??'skipped'}</p>
                    </li>)
            })}
            
          </ol>
      </div>
}