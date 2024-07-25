import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import AddHorse from './components/AddHorse';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-horse" element={<AddHorse />} />
        {/* Add routes for Login and Register if needed */}
      </Routes>
    </Router>
  );
};

export default App;
