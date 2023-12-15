import {useState,useEffect} from 'react';
function QuizTimer({timeout,onTimeOut,mode}){
  const [remainingTime,setRemainingTime]=useState(timeout);


  useEffect(() => {
  const timerId=setTimeout(onTimeOut,timeout)
    return () => clearTimeout(timerId)
  },[timeout,onTimeOut])

  useEffect(() => {
    const interval=setInterval(() =>{
      setRemainingTime(prevTimer => prevTimer - 100)
  },100)

  return () => clearInterval(interval)

  },[])


return <progress id="progress" value={remainingTime} max={timeout} className={mode}/>
}
export default QuizTimer;