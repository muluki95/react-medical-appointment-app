
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import LandingPage from "./Components/Landing_Page/LandingPage";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";


function App() {
  return (
    <>
    <BrowserRouter>
          <Navbar/>
              <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/signup" element={<Signup />}/>
                <Route path="/login" element={<Login />}/>
                
              </Routes>
            
        </BrowserRouter>
       </>
  );
}

export default App;
