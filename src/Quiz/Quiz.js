import React,{useContext, useState} from "react";
import { QuizContext } from '../Helpers/Context';
import { Question } from "../Helpers/Questions";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './quiz.css'
import { FaFan} from "react-icons/fa";


const Quiz = () =>{
    const [lastQuestion , setLastQuestion] = useState(0)
    const [optionChoosen , setOptionChoosen] = useState("")
    const {setPage, score , setScore, username}  = useContext(QuizContext)

    const next = () =>{
        if (Question[lastQuestion].answer== optionChoosen){
            setScore(score+1)
        }
        setLastQuestion(lastQuestion+1)
    }

    const finishQuiz= () =>{
        if (Question[lastQuestion].answer== optionChoosen){
            setScore(score+1)
        }
        setPage('endscreen')
    }
    return(
    <div className="Quiz">
<div className="quizBox">
   <h1 className="quizHeader">Hey {username}, game started  </h1>
  
<p id="questions">{Question[lastQuestion].question}</p>
</div>
  <div className="quizAnswer">
  <Button onClick={()=>{setOptionChoosen("A")}}className="btnChoose">{Question[lastQuestion].optionA}</Button>
<Button  onClick={()=>{setOptionChoosen("B")}}className="btnChoose">{Question[lastQuestion].optionB}</Button>
<Button  onClick={()=>{setOptionChoosen("C")}}className="btnChoose">{Question[lastQuestion].optionC}</Button>
<Button  onClick={()=>{setOptionChoosen("D")}}className="btnChoose">{Question[lastQuestion].optionD}</Button>

  </div>
 {lastQuestion === Question.length -1 ? 
  <Button id="finishBtn" onClick={finishQuiz}>Finish</Button>:
   <Button id="finishBtn"onClick={next}>Next <FaFan/></Button>
  
 }

    </div>
    ) 
}
export default Quiz 