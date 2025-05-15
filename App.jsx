import React,{useState} from 'react'
import Navbar from './components/Navbar';
import Home from './components/home';
import Destination from './components/Destination';
import Transport from './components/Transport';
import Booking from './components/Booking';
import Register from './components/Register';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Profile from './components/Profile';
import Footer from './components/Footer';
import Forget from './components/Forget';
import ResetPassword from './components/ResetPassword';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const handleLogout = () => {
    localStorage.removeItem('userEmail');
   setIsLoggedIn(false);
   alert("successfully logout")
   navigate('/login');
  };

  return (
    <Router>
     
    <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout}/>
  
    <Routes>
    <Route exact path="/" element={<Home />}/>
    <Route exact path="/Destination" element={<Destination />}/>
    <Route exact path="/Transport" element={<Transport />}/>
    <Route exact path="/Booking" element={<Booking />}/>
    <Route exact path="/Profile" element={<Profile />}/>
    <Route exact path="/Register" element={<Register setIsLoggedIn={setIsLoggedIn} />}/>
    <Route exact path="/Login" element={<Login setIsLoggedIn={setIsLoggedIn} />}/>
    <Route exact path="/Forget" element={<Forget  />}/>
    <Route path="/reset-password/:token" element={<ResetPassword />} />

    {/* <Route exact path="/Contact" element={<Contact />}/>
    <Route exact path="/Login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
    <Route exact path="/CreateUser" element={<CreateUser />}/> */}
    </Routes>
    <Footer/>
  </Router>
  )
}

export default App
