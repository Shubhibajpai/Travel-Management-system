import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../css/resetPassword.css';
import { useNavigate} from 'react-router-dom'

export default function ResetPassword() {
    const { token } = useParams();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`http://localhost:3001/reset-password/${token}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ password, confirmPassword })
        })
        .then(res => res.json())
        .then(data => {
            alert(data.message || "Password reset");
            navigate('/Login')
        })
        .catch(err => {
            console.error(err);
            alert("Error resetting password");
        });
    };

    return (
        <div className="reset-password">
            <h2>Reset Password</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="password"
                    placeholder="New Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    required
                />
                <button type="submit">Reset Password</button>
            </form>
        </div>
    );
}
