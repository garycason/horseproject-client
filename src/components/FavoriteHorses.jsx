import { useEffect, useState } from 'react'
import axios from 'axios'

const FavoriteHorses = () => {
  const [favoriteHorses, setFavoriteHorses] = useState([])

  useEffect(() => {
    fetchFavoriteHorses()
  }, [])

  const fetchFavoriteHorses = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/favoritehorses/', {
        headers: {
          Authorization: `Token ${localStorage.getItem('token')}`
        }
      });
      setFavoriteHorses(response.data)
    } catch (error) {
      console.error('Error fetching favorite horses:', error)
    }
  };

  return (
    <div className="container">
      <section className="section">
        <h1 className="title">Your Favorite Horses</h1>
        <div className="table-container">
          <table className="table is-fullwidth is-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Date of Birth</th>
                <th>Total Races</th>
                <th>Total Earnings</th>
              </tr>
            </thead>
            <tbody>
              {favoriteHorses.map(favorite => (
                <tr key={favorite.id}>
                  <td>{favorite.horse.name}</td>
                  <td>{favorite.horse.date_of_birth}</td>
                  <td>{favorite.horse.total_races}</td>
                  <td>{favorite.horse.total_earnings}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

export default FavoriteHorses
