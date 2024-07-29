//YourStable.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { getCookie } from '../utils/csrf';

const YourStable = () => {
  const [horses, setHorses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchHorses();
  }, []);

  const fetchHorses = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/horses/', {
        headers: {
          Authorization: `Token ${localStorage.getItem('token')}`
        }
      });
      setHorses(response.data);
    } catch (error) {
      console.error('Error fetching horses:', error);
    }
  };

  const handleDelete = async (id) => {
    const csrfToken = getCookie('csrftoken');
    try {
      await axios.delete(`http://localhost:8000/api/horses/${id}/`, {
        headers: {
          Authorization: `Token ${localStorage.getItem('token')}`,
          'X-CSRFToken': csrfToken
        }
      });
      fetchHorses(); // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting horse:', error);
    }
  };

  const handleFavorite = async (id) => {
    const csrfToken = getCookie('csrftoken');
    try {
      await axios.post('http://localhost:8000/api/favorite_horses/', {
        horse: id
      }, {
        headers: {
          Authorization: `Token ${localStorage.getItem('token')}`,
          'X-CSRFToken': csrfToken
        }
      });
      alert('Horse favorited successfully!');
    } catch (error) {
      console.error('Error favoriting horse:', error);
    }
  };

  return (
    <div className="container">
      <section className="section">
        <h1 className="title">Your Stable</h1>
        <Link to="/add-horse" className="button is-primary mb-4">Add New Horse</Link>
        <div className="table-container">
          <table className="table is-fullwidth is-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Date of Birth</th>
                <th>Total Races</th>
                <th>Total Earnings</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {horses.map(horse => (
                <tr key={horse.id}>
                  <td>{horse.name}</td>
                  <td>{horse.date_of_birth}</td>
                  <td>{horse.total_races}</td>
                  <td>{horse.total_earnings}</td>
                  <td>
                    <button className="button is-small is-info mr-2" onClick={() => navigate(`/edit-horse/${horse.id}`)}>Edit</button>
                    <button className="button is-small is-danger mr-2" onClick={() => handleDelete(horse.id)}>Delete</button>
                    <button className="button is-small is-success" onClick={() => handleFavorite(horse.id)}>Favorite</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default YourStable;
