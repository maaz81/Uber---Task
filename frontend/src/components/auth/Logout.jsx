import axios from 'axios';

export const logoutUser = async (navigate) => {
  try {
    await axios.get('http://localhost:5000/api/auth/logout', { withCredentials: true });
    navigate('/login');
  } catch (err) {
    console.error('Logout failed:', err);
  }
};
