import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const HomeRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/auth/me', { withCredentials: true });

        if (res.data.role === 'admin') {
          navigate('/admin');
        } else {
          navigate('/book');
        }
      } catch (err) {
        navigate('/login');
      }
    };

    checkUser();
  }, [navigate]);

  return <p className="text-center mt-10">Checking user role...</p>;
};

export default HomeRedirect;
