import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import BookRide from './components/profile/BookRide';
import AdminPanel from './components/admin/AdminPanel';
import HomeRedirect from './components/HomeRedirect';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeRedirect />} />      
        <Route path="/book" element={<BookRide />} />       
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<AdminPanel />} />    
      </Routes>
    </Router>
  );
};

export default App;
