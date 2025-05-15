import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../css/booking.css';
export default function Booking() {

  const navigate = useNavigate()
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState(localStorage.getItem('userEmail') || '');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [destination, setDestination] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [persons, setPersons] = useState(1);
  const [bus, setBus] = useState('');
  const [timing, setTiming] = useState('');
  const [payment, setPayment] = useState(0);
  const today = new Date().toISOString().split("T")[0];
  
  const handleFullNameChange = (event) => setFullName(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePhoneNumberChange = (event) => setPhoneNumber(event.target.value);
  const handleDestinationChange = (event) => setDestination(event.target.value);
  const handleTravelDateChange = (event) => setTravelDate(event.target.value);
  const handleReturnDateChange = (event) => setReturnDate(event.target.value);
  const handlePersonsChange = (event) => setPersons(event.target.value);
  const handleBusChange = (event) => setBus(event.target.value);
  const handleTimingChange = (event) => setTiming(event.target.value);

  const handleCheckPayment = () => {
    let calculatedPrize = 0;

    const prices = {
        Rishikesh: { economy: 240, business: 300, first_class: 360 },
        Nainital: { economy: 300, business: 360, first_class: 420 },
        'Jim-Corbett-National-Park': { economy: 250, business: 300, first_class: 350 },
        Manali: { economy: 570, business: 650, first_class: 740 },
        'Bir Billing': { economy: 540, business: 600, first_class: 680 },
    };

    // Check if the destination and bus are valid
    if (prices[destination] && prices[destination][bus]) {
        const pricePerPerson = prices[destination][bus];
        calculatedPrize = pricePerPerson * persons;  // Use 'persons' instead of hardcoded multiplier
    }

    setPayment(calculatedPrize);
};
 

  const handleBooking = (event) => {
    event.preventDefault();

    const bookingData = {
      fullName,
      email,
      phoneNumber,
      destination,
      travelDate,
      returnDate,
      persons,
      bus,
      timing,
      payment
    };
  
    console.log('Booking Data:', bookingData);

    axios.post('http://127.0.0.1:3001/booking', {
      fullName: fullName,             
      email: email,
      phoneNumber: phoneNumber,
      destination: destination,
      travelDate: travelDate,
      returnDate: returnDate,
      persons: persons,
      bus: bus,
      timing: timing,
      payment: payment
    })
      .then(response => {
        console.log('Booking successful:', response.data);
        alert("you booked your ticket successfully");
      })
      .catch(error => {
        console.error('Error booking travel:', error);
      });
    
    navigate('/')
   
  };

  return (
    <>
    <h1>Your Dream Vacation Awaits – Book Now!</h1>
    <div className="book-sect">
    <div className="booking-form">
        <h2>Travel Booking Form</h2>
        <form onSubmit={handleBooking}>
          
          <div className="form-group">
            <label htmlFor="name">Full Name:</label>
            <input type="text" id="name" name="name" required onChange={handleFullNameChange}/>
          </div>
      
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required value={email} onChange={handleEmailChange} readOnly/>
          </div>
      
          <div className="form-group">
            <label htmlFor="destination">Destination:</label>
            <select  value={destination} required onChange={handleDestinationChange} id="destination" name="destination">
                <option value="" disabled >Select Destination</option>
                <option value="Rishikesh">Rishikesh</option>
                <option value="Nainital">Nainital</option>
                <option value="Jim-Corbett-National-Park">Jim Corbett National Park</option>
                <option value="Manali">Manali</option>
                <option value="Bir Billing">Bir Billing</option>
            </select>
          </div>
      
          <div className="form-group">
            <label htmlFor="travel_date">Departure Date:</label>
            <input type="date" id="travel_date" name="travel_date" min={today} onChange={handleTravelDateChange} required/>
          </div>
      
          <div className="form-group">
            <label htmlFor="return-date">Return Date:</label>
            <input type="date" id="return-date" name="return-date" min={travelDate? new Date(new Date(travelDate).getTime() + 86400000)
          .toISOString().split("T")[0]: today} onChange={handleReturnDateChange} required/>
          </div>
      
          <div className="form-group">
            <label htmlFor="passengers">Number of Passengers:</label>
            <input type="number" value={persons} onChange={handlePersonsChange} id="passengers" name="passengers" min="1" max="10" required/>
          </div>
      
          <div className="form-group">
            <label htmlFor="travel_class">Travel Class:</label>
            <select value={bus} onChange={handleBusChange} id="travel_class" name="travel_class" required>
              <option value="" disabled>Select class</option>
              <option value="economy">Economy</option>
              <option value="business">Business</option>
              <option value="first_class">First Class</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="Phone">Contact No.:</label>
            <input type="number" maxLength="10"
    pattern="[0-9]{10}"  name="Phone" onChange={handlePhoneNumberChange} required/>
         </div>

         <div className="form-group">
            <label htmlFor="Timing">Select Your Timing:</label>
            <select id="timing" value={timing} name="Timing" onChange={handleTimingChange} required >
            <option value="" disabled >Select schedule</option>
            <option value="4:00 AM">4:00 AM</option>
            <option value="7:00 AM">7:00 AM</option>
            <option value="9:00 AM">9:00 AM</option>
            <option value="1:00 PM">1:00 PM</option>
            <option value="5:00 PM">5:00 PM</option>
            <option value="6:00 PM">6:00 PM</option>
            </select>    
        </div>

        <div className="form-group">
            <label htmlFor="payment">Amount to be Paid</label>
            <input type="number" name="persons" id="payment" value={payment} readOnly />
        </div>
            <button id="check"  className="check-prize" onClick={handleCheckPayment} type="button">Check Charges</button>
             <button type="submit" className="submit-btn" >Book Travel</button>
        </form>
        
       
      </div>
    </div>
    </>
               
         

  )
}
