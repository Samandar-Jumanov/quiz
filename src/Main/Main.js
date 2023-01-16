import React,{useContext} from "react";
import { QuizContext } from '../Helpers/Context';
import './main.css'
const Main =() =>{
    const {setPage} = useContext(QuizContext)
    return(
   <div className="main">
    <button  className="mainBtn"onClick={()=>{setPage('quiz')}}>Start</button>
   </div>
    )
}

export default Main