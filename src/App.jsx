import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import AddHorse from './components/AddHorse';
import YourStable from './components/YourStable';
import FavoriteHorses from './components/FavoriteHorses';
import Register from './components/Register';
import Login from './components/Login';
import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-horse" element={<AddHorse />} />
          <Route path="/your-stable" element={<YourStable />} />
          <Route path="/favorite-horses" element={<FavoriteHorses />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
