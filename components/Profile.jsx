import { useEffect } from 'react';
import React,{useState}from 'react'
import '../Css/profile.css';
export default function Profile() {
  const [bookings, setBookings] = useState([]);
  const [email, setEmail] = useState(localStorage.getItem('userEmail') || '');

  useEffect(() => {
    
  
    fetch('http://127.0.0.1:3001/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
      .then(response => response.json())
      .then(data => setBookings(data))
      .catch(error => console.error('Error fetching bookings:', error));
  }, []);
  return (
    <div>
      <div className="section-pro ">
        <div className="pro-left">
        <img src="/images/profile1.webp" alt="" />
        </div>
        <div className="pro-right">
          <h4>Welcome to your profile dashboard.</h4>
          <p>Quickly access, manage, and personalize your travel management details with ease.</p>
        </div>
      </div>
      <div className="section-profile">
      
      <h1 className='profile-head'>All Your Bookings</h1>
      <table id="userTable">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Destination</th>
            <th>Travel Date</th>
            <th>Return Date</th>
            <th>Persons</th>
            <th>Bus</th>
            <th>Timing</th>
            <th>Payment</th>
          </tr>
        </thead>
        <tbody>
        {bookings.map((booking, index) => (
              <tr key={index}>
                <td>{booking.fullName}</td>
                <td>{booking.email}</td>
                <td>{booking.phoneNumber}</td>
                <td>{booking.destination}</td>
                <td>{booking.travelDate}</td>
                <td>{booking.returnDate}</td>
                <td>{booking.persons}</td>
                <td>{booking.bus}</td>
                <td>{booking.timing}</td>
                <td>{booking.payment}</td>
              </tr>
            ))}
        </tbody>
      </table>
      </div>
    </div>
  )
}
