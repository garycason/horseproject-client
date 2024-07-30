import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const EditHorse = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [totalRaces, setTotalRaces] = useState('');
  const [totalEarnings, setTotalEarnings] = useState('');
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetchHorseDetails();
  }, [id]);

  const fetchHorseDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/horses/${id}/`, {
        headers: {
          Authorization: `Token ${localStorage.getItem('token')}`
        }
      });
      const horse = response.data;
      setName(horse.name);
      setDateOfBirth(horse.date_of_birth);
      setTotalRaces(horse.total_races);
      setTotalEarnings(horse.total_earnings);
    } catch (error) {
      console.error('Error fetching horse details:', error);
    }
  };

  const handleEditHorse = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8000/api/horses/${id}/`, {
        name,
        date_of_birth: dateOfBirth,
        total_races: totalRaces,
        total_earnings: totalEarnings,
      }, {
        headers: {
          Authorization: `Token ${localStorage.getItem('token')}`
        }
      });
      navigate('/your-stable');
    } catch (error) {
      console.error('Error editing horse:', error);
    }
  };

  return (
    <div className="section">
      <div className="container">
        <h2 className="title is-2">Edit Horse</h2>
        <form onSubmit={handleEditHorse}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
              />
            </div>
          </div>
          <div className="control">
            <button className="button is-primary" type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditHorse;


