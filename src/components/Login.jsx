import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/login/', {
                username,
                password,
            });
            localStorage.setItem('token', response.data.token);
            // Redirect to dashboard or homepage
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return (
        <div className="section">
            <div className="container">
                <h2 className="title is-2">Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="field">
                        <label className="label">Username</label>
                        <div className="control">
                            <input
                                className="input"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control">
                            <input
                                className="input"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="control">
                        <button className="button is-primary" type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
