
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import LandingPage from "./Components/Landing_Page/LandingPage";

function App() {
  return (
    <>
    <BrowserRouter>
          <Navbar/>
              <Routes>
                <Route path="/" element={<LandingPage/>}/>
              </Routes>
            
        </BrowserRouter>
       </>
  );
}

export default App;
