import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../auth/Logout';

const AdminPanel = () => {
    const navigate = useNavigate();
    const [rides, setRides] = useState([]);

    useEffect(() => {
        const initAdmin = async () => {
            try {

                const res = await axios.get('http://localhost:5000/api/auth/me', { withCredentials: true });

                if (res.data.role !== 'admin') {
                    navigate('/login');
                    return;
                }

                const [jsonRes, dbRes] = await Promise.all([
                    axios.get('http://localhost:5000/api/rides/all', { withCredentials: true }),
                    axios.get('http://localhost:5000/api/rides/db', { withCredentials: true })
                ]);

                const combinedRides = [...jsonRes.data, ...dbRes.data];
                setRides(combinedRides);
            } catch (err) {
                console.error(err);
                navigate('/login');
            }
        };

        initAdmin();
    }, [navigate]);

    const handleLogout = () => {
        logoutUser(navigate);
    };

    return (

        <>
            <button onClick={handleLogout} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
                Logout
            </button>


            <div className="p-4 max-w-5xl mx-auto mt-10">
                <h2 className="text-2xl font-bold mb-4">Admin Panel – All Rides</h2>
                <table className="w-full border">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border px-2 py-1">User</th>
                            <th className="border px-2 py-1">Pickup</th>
                            <th className="border px-2 py-1">Drop</th>
                            <th className="border px-2 py-1">Pay Method</th>
                            <th className="border px-2 py-1">Driver</th>
                            <th className="border px-2 py-1">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rides.map((ride, index) => (
                            <tr key={ride._id || index}>
                                <td className="border px-2 py-1">{ride.user?.name || 'Unknown'}</td>
                                <td className="border px-2 py-1">{ride.pickup}</td>
                                <td className="border px-2 py-1">{ride.drop}</td>
                                <td className="border px-2 py-1">{ride.payMethod}</td>
                                <td className="border px-2 py-1">{ride.driver?.name || 'N/A'}</td>
                                <td className="border px-2 py-1">{ride.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>

    );
};

export default AdminPanel;
