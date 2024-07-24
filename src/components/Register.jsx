import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/users/', {
                username,
                password,
            });
            // Handle successful registration, possibly redirect to login
        } catch (error) {
            console.error('Error registering:', error);
        }
    };

    return (
        <div className="section">
            <div className="container">
                <h2 className="title is-2">Register</h2>
                <form onSubmit={handleRegister}>
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
                        <button className="button is-primary" type="submit">Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
