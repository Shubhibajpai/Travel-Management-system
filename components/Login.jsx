import React, { useState } from 'react';
import '../Css/login.css'; // Assuming styles are moved to a CSS file
import axios from 'axios'
import { useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom';
function Login(props) {
  // State variables for form fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate()

  const handleSubmit = (e)=>{
    e.preventDefault()
    axios.post('http://127.0.0.1:3001/login',{email,password})
    .then(result => {
      console.log(result)
      if(result.data.message === "Success"){
        console.log("done")
        const userEmail = result.data.user.email;
        localStorage.setItem('userEmail', userEmail);

        alert(`Logged in successfully as ${userEmail}`);
        // alert("Logged in successfully")
        props.setIsLoggedIn(true);
        navigate('/')
      }
      else{
        alert("Invalid Credentials")
      }
    })
    .catch(err=> console.log(err))
   
  }
  return (
    <div className="container">
      <h1>Login Form</h1>
      <form className="loginForm" onSubmit={handleSubmit}>
        <div className="field">
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="field">
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="forget">
          <Link to="/Forget">Forgot password?</Link>
        </div>
        <div className="field">
          <button type="submit" className="login">Login</button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
      <div className="sign">
        <p>Not a member? </p>
        <Link to="/Register">SignUp</Link>
        {/* <a href="/signup">Sign up now</a> */}
      </div>
    </div>
  );
}

export default Login;
