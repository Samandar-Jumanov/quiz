import { useContext } from 'react';
import './login.css';
import { FaQuestion, FaLongArrowAltRight} from "react-icons/fa";
import { QuizContext } from '../Helpers/Context';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
function Login() {
  const {setPage, setUsername, username} = useContext(QuizContext)
    const usernameChange = (e) =>{
      setUsername(e.target.value)
     
    }
  
  return (
    <div className="App">
   <div className="box">
    <FaQuestion className='icon'/>
   </div>


  <div className="box">
 <h1 id='header'>React Quiz App </h1>
  <input type="text" className='signUpInput' placeholder='your name ' onChange={usernameChange} minLength={4} maxLength={10} />

  {username == null  || username==""? <h1 id='alert'>Please enter name </h1> :
   <Button   id='submitBtn' onClick={()=>{setPage('quiz')}}>Start quiz<span id='btnIconHover'>
    <FaLongArrowAltRight className='buttonIcon'/>
    </span></Button>
    
  }
   
  </div>

    </div>
  );
}

export default Login;
