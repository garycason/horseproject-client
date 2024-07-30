//Login.jsx
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { setToken } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/auth/login/', {
                username,
                password,
            });
            setToken(response.data.token);
            localStorage.setItem('token', response.data.token);
            navigate('/your-stable'); // Redirect to the stable or homepage
        } catch (error) {
            console.error('Error logging in:', error)
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

export default Login

