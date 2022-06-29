import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";

import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";


function App() {
  const [mode, setMode] = useState('light') //
  const [alert, setAlert] = useState(null)

  const showAlert =(message, type) => {
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const toggleMode = () => {
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#212109';
      showAlert("Dark mode has been activated.", "success");
      document.title = 'TextUtils - Dark Mode'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been activated.", "success");
      document.title = 'TextUtils - Light Mode'
    }
  }

    return (
      <BrowserRouter>
      <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
        <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading='Enter the text to analyse' mode={mode}/>} />
          <Route exact path="/about" element={<About/>} />
          <Route path='*' element={<h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    );
}

export default App;


/* <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
         <TextForm showAlert={showAlert} heading='Enter the text to analyse' mode={mode}/> 
          <About/>
        </div> */