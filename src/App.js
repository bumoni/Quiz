import logo from './logo.svg';
import './App.css';
import { useAuth } from "./components/Authentication"
import {Route,Routes,BrowserRouter as Router} from "react-router-dom"
import Login from './Page/Login/Login';
import Quiz from './Page/Quiz';
function App() {
  const {email}=useAuth();
  if(email===""){
    return( <Router>
      <Routes>
         <Route path='*' element={<Login/>}/>
      </Routes>
    </Router>
   )
  }
  else{
    return (
    <>

      <Router>
        <Routes>
          <Route path='/' element={<Quiz/>}/>
        </Routes>
      </Router>
    </>
    )
  }

}

export default App;
