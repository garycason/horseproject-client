import 'bulma/css/bulma.css';

/* Add any custom styles here */

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Horses from './components/Horses';

const App = () => (
    <Router>
        <div>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/horses" element={<Horses />} />
                <Route path="/" element={<Horses />} />
            </Routes>
        </div>
    </Router>
);

export default App;
