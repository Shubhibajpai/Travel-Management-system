import React from 'react'
import '../css/navbar.css';
import { Link } from 'react-router-dom';
export default function Navbar(props) {
  return (
        <div className="header">
        <nav>
            <div className="left">
                <div className="logo">
                    <h2>JourneyFLOW</h2>
                </div>
            </div>
            <div className="right">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Destination">Destinations</Link></li>
                    <li><Link to="/Transport">Transport</Link></li>
                    
                    {/* <li><Link to="/Register">SignUp</Link></li> */}
                    {!props.isLoggedIn ? (
                      <li><Link to="/Login">Login</Link></li>
                    ) : (
                      <>
                         <li><Link to="/Booking">Booking</Link></li>
                         <li><Link to="/Profile">Profile</Link></li>
                        <li><button className="btn1" onClick={props.onLogout}>Logout</button></li>
                        
                      </>
                    )}
                    
                </ul>
            </div>
         </nav>
         </div>
  )
}
