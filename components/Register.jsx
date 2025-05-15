import React, { useState } from 'react';
import '../Css/SignUp.css';  // Assuming you have a separate CSS file
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function SignUp(props) {
  // State to store form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dob, setDob] = useState('');
  const navigate = useNavigate()


  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    axios.post('http://127.0.0.1:3001/register',{email,password,confirmPassword,phoneNumber,dob})
    .then(result => {console.log(result)
      const userEmail = result.data.user.email;
      localStorage.setItem('userEmail', userEmail);
      props.setIsLoggedIn(true);
      alert("User successfully registered")
    })
    .catch(err=> console.log(err))
    navigate('/')
   
  };

  return (
    <div className="signup-container">
      <h1>Sign up</h1>
      <p className="create">Create an account</p>
      <form onSubmit={handleSubmit}>
        <div className="field1">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="input"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="field1">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            className="input"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="field1">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            placeholder="Enter confirm password"
            className="input"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div className="field1">
          <label htmlFor="phoneNumber">Contact No.</label>
          <input
            type="tel"
            placeholder="Enter contact no"
            className="input"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="field1">
          <label htmlFor="dob">Date of Birth</label>
          <input
            type="date"
            className="input"
            name="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
        <div className="register">
          <button type="submit">Sign up</button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;