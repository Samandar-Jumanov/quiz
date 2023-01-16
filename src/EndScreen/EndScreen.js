import React,{useContext} from "react";
import { QuizContext } from '../Helpers/Context';
import { Question } from "../Helpers/Questions";
import './endscreen.css'
  
const EndScreen = () =>{
 const {score,  setPage , setScore,setUsername, username} = useContext(QuizContext)
 const Result = () =>{
    if (score >=0 ){
        return <h1>Need studying {username}</h1>
    }  else if (score ==15 || score <25){
        return <h1>Average knwodlege </h1>
    }  else if( score <=25 || score >=Question.length) {
         return <h1>Cool Boy !!!!!!</h1>
    }
   }
    return(
    <div className="end">
      <div className="result">
       <Result/>
      </div>
         <h1 id="endHeader">EndScreen</h1>
         <p id="score">{score} / {Question.length}</p>
        <button  id="endScreenBtn"onClick={()=>{setPage('login'); setScore(0);setUsername('')}}>Restart</button>
        <footer className="footer-blockquote-footer">Made Samandar Jumanov</footer>
    </div>
   
    )
}
export default  EndScreen