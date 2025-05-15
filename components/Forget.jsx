import React,{useState} from 'react'
import '../css/forget.css';
export default function Forget() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:3001/forgot-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("You are getting redirected to password reset page");
        if (data.resetLink) {
          window.location.href = data.resetLink;
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Something went wrong");
      });
  };

  return (
    <div>
        <div className="forget-password-page">
            <h2>Forgot Your Password?</h2>
            <p>Enter your email address to receive a password reset link.</p>
            <form onSubmit={handleSubmit}>
                <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
                <button type="submit">Send Reset Link</button>
            </form>
        </div>
    </div>
  )
}
