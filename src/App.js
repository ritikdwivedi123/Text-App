import React, { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextBox from './Components/TextBox';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  
  const toggleMode=()=>{
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor = '#022750'
      showAlert('Dark mode has been enabled', 'success')
    }
    else{
      setmode('light')
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success')

    }
  }


  return (
    <>
     <Router>
      <Navbar Title= "Textutils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}/>
      <div className="container">
      <Routes>
          <Route exact path="/about"
          element={<About mode={mode}/>}>
            </Route>
          <Route exact path="/"
          element={<TextBox showAlert={showAlert} Heading= 'Enter Text Here' mode={mode}/>}>
          </Route>
      </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
