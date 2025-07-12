import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../auth/Logout';
import axios from 'axios';

const BookRide = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [pickup, setPickup] = useState('');
  const [drop, setDrop] = useState('');
  const [payMethod, setPayMethod] = useState('cash');

  useEffect(() => {
    axios.get('http://localhost:5000/api/auth/me', { withCredentials: true })
      .then(res => {
        setUser(res.data);
      })
      .catch(() => {
        navigate('/login');
      });
  }, [navigate]);



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/rides', { pickup, drop, payMethod }, { withCredentials: true });
      alert("Ride booked! Assigned driver: " + res.data.driver?.name);
      setPickup('');
      setDrop('');
    } catch (err) {
      alert('Error booking ride');
    }
  };

  const handleLogout = () => {
    logoutUser(navigate);
  };

  if (!user) return <p className="text-center mt-10">Checking login status...</p>;

  return (

    <>
      <button onClick={handleLogout} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
        Logout
      </button>
      <div className="max-w-xl mx-auto mt-10 p-4 border shadow rounded">

        <h2 className="text-xl font-bold mb-4">Welcome {user.name}, Book a Ride</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" placeholder="Pickup Location" value={pickup} onChange={(e) => setPickup(e.target.value)} required className="w-full p-2 border rounded" />
          <input type="text" placeholder="Drop Location" value={drop} onChange={(e) => setDrop(e.target.value)} required className="w-full p-2 border rounded" />
          <select value={payMethod} onChange={(e) => setPayMethod(e.target.value)} className="w-full p-2 border rounded">
            <option value="cash">Cash</option>
            <option value="card">Card</option>
          </select>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Book Ride</button>
        </form>
      </div>

    </>
  );
};

export default BookRide;
