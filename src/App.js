import "./Components/Navbar/Navbar.css";
import "./Components/Footer/Footer.css";
import "./Components/Forms/input.css";
import "./Components/Forms/Forgetpassword.css"
import Footer from "./Components/Footer/Footer.js";
//import Demo from "./Components/Login/Login.js";
import Navbar from "./Components/Navbar/Navbar.js";
import Demo from "./Components/Forms/input.js";
import Forgetpassword from "./Components/Forms/Forgetpassword";
import React from "react";
import  ReactDOM  from "react-dom";
import './App.css';
import { Routes , Route, Link, BrowserRouter as Router, BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <>
  <BrowserRouter>
    <div>
      <Navbar />
  
    { /* <Forgetpassword/> */}
    { /*   <Demo/> */}
    
          <Routes >
          <Route exact path="/" element={<Demo />} />
          <Route exact path="/Forgotpassword" element={<Forgetpassword />} />
          </Routes>
      
            
       
      
      <Footer />
    </div>
  </BrowserRouter>
  </>
  );
}

export default App;
