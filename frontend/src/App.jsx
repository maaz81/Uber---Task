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
        <Route path="/" element={<HomeRedirect />} />      {/* 👈 Auto redirect here */}
        <Route path="/book" element={<BookRide />} />       {/* 👤 For normal users */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<AdminPanel />} />    {/* 🧑‍💻 For admin only */}
      </Routes>
    </Router>
  );
};

export default App;
