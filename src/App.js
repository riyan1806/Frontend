import "./Components/Navbar/Navbar.css";
import "./Components/Footer/Footer.css";
import "./Components/Login/Login.css";
import "./Components/Forms/Forgetpassword.css"
import Footer from "./Components/Footer/Footer.js";
//import Demo from "./Components/Login/Login.js";
import Navbar from "./Components/Navbar/Navbar.js";
import Demo from "./Components/Forms/Demo";
import Forgetpassword from "./Components/Forms/Forgetpassword";

import './App.css';

function App() {
  return (
    <>
      <Navbar />
      
      <Forgetpassword/>
      {/* <Demo/> */}
      <Footer />
    </>
  );
}

export default App;
