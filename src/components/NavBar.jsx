import { Link } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const NavBar = () => {
  const { username } = useContext(AuthContext);

  return (
    <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          Horse App
        </Link>
      </div>

      <div className="navbar-menu">
        <div className="navbar-start">
          
          <Link className="navbar-item" to="/your-stable">
            Your Stable
          </Link>
          <Link className="navbar-item" to="/add-horse">
            Add Horse
          </Link>
          <Link className="navbar-item" to="/favorite-horses">
            Favorite Horses
          </Link>
        </div>

        <div className="navbar-end">
          {username && (
            <div className="navbar-item">
              <span>Welcome, {username}</span>
            </div>
          )}
          <div className="navbar-item">
            <div className="buttons">
              <Link className="button is-light" to="/login">
                Log in
              </Link>
              <Link className="button is-light" to="/register">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
