
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import LandingPage from "./Components/Landing_Page/LandingPage";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";
import BookingConsultation from "./Components/BookingConsultation/BookingConsultation";
import FindDoctorSearchIC from "./Components/FindDoctorSearchIC/FindDoctorSearchIC";
import DoctorCardIC from "./Components/DoctorCardIC/DoctorCardIC"; 
import AppointmentFormIC from "./Components/AppointmentFormIC/AppointmentFormIC";



function App() {
  return (
    <>
    <BrowserRouter>
          <Navbar/>
              <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/signup" element={<Signup />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/bookingconsultation" element={<BookingConsultation />} />
                <Route path="/finddoctorssearchic" element={<FindDoctorSearchIC />} />
                <Route path="/doctorcardic" element={<DoctorCardIC />} />
                <Route path="/appointmentformic" element={<AppointmentFormIC />} />


                

                
              </Routes>
            
        </BrowserRouter>
       </>
  );
}

export default App;
