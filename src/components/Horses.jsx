//Horses.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Horses = () => {
    const [horses, setHorses] = useState([]);
    const [name, setName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [totalRaces, setTotalRaces] = useState('');
    const [totalEarnings, setTotalEarnings] = useState('');

    useEffect(() => {
        fetchHorses();
    }, []);

    const fetchHorses = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/horses/', {
                headers: { Authorization: `Token ${localStorage.getItem('token')}` }
            });
            setHorses(response.data);
        } catch (error) {
            console.error('Error fetching horses:', error);
        }
    };

    const addHorse = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/api/horses/', {
                name,
                date_of_birth: dateOfBirth,
                total_races: totalRaces,
                total_earnings: totalEarnings,
            }, {
                headers: { Authorization: `Token ${localStorage.getItem('token')}` }
            });
            fetchHorses();
        } catch (error) {
            console.error('Error adding horse:', error);
        }
    };

    return (
        <div>
            <h2>Horses</h2>
            <ul>
                {horses.map(horse => (
                    <li key={horse.id}>{horse.name} - {horse.total_races} races - ${horse.total_earnings}</li>
                ))}
            </ul>
            <form onSubmit={addHorse}>
                <h3>Add Horse</h3>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Date of Birth:</label>
                    <input
                        type="date"
                        value={dateOfBirth}
                        onChange={(e) => setDateOfBirth(e.target.value)}
                    />
                </div>
                <div>
                    <label>Total Races:</label>
                    <input
                        type="number"
                        value={totalRaces}
                        onChange={(e) => setTotalRaces(e.target.value)}
                    />
                </div>
                <div>
                    <label>Total Earnings:</label>
                    <input
                        type="number"
                        value={totalEarnings}
                        onChange={(e) => setTotalEarnings(e.target.value)}
                    />
                </div>
                <button type="submit">Add Horse</button>
            </form>
        </div>
    );
};

export default Horses;
