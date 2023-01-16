import React,{useState} from "react";
import Login from "./LoginComp/Login";
import './App.css'
import Quiz from "./Quiz/Quiz";
import {QuizContext} from './Helpers/Context'
import EndScreen from "./EndScreen/EndScreen";
function App () {
  const [page , setPage] = useState('login')
  const [score , setScore ] = useState(0)
  const [username , setUsername] = useState("")
  return(
  <div className="App">
 <QuizContext.Provider value={{page ,setPage, score , setScore, username , setUsername}}>
    {page === 'login' && <Login/>}
    {page === 'quiz' && <Quiz/>}
    {page === 'endscreen' && <EndScreen/>}
    </QuizContext.Provider>
  </div>
    )
}

export default App