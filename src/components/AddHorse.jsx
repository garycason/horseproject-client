import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { getCookie } from '../utils/csrf';

const AddHorse = () => {
  const [name, setName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [totalRaces, setTotalRaces] = useState('');
  const [totalEarnings, setTotalEarnings] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const csrfToken = getCookie('csrftoken');
    try {
      await axios.post('http://localhost:8000/api/horses/', {
        name,
        date_of_birth: dateOfBirth,
        total_races: totalRaces,
        total_earnings: totalEarnings
      }, {
        headers: {
          Authorization: `Token ${localStorage.getItem('token')}`,
          'X-CSRFToken': csrfToken
        }
      });
      navigate('/');
    } catch (error) {
      console.error('Error adding horse:', error);
    }
  };

  return (
    <div className="container">
      <section className="section">
        <h1 className="title">Add a New Horse</h1>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Date of Birth</label>
            <div className="control">
              <input
                className="input"
                type="date"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Total Races</label>
            <div className="control">
              <input
                className="input"
                type="number"
                value={totalRaces}
                onChange={(e) => setTotalRaces(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Total Earnings</label>
            <div className="control">
              <input
                className="input"
                type="number"
                value={totalEarnings}
                onChange={(e) => setTotalEarnings(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="control">
            <button className="button is-primary" type="submit">
              Add Horse
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddHorse;
