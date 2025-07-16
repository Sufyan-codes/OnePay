import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Landing from '../pages/Landing';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Dashboard from '../pages/Dashboard';
import Payment from '../pages/Payment';
import NotFound from '../pages/NotFound';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar';
import LandingLayout from '../pages/LandingLayout';
import About from '../pages/About';
import Contact from '../pages/Contact';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
};

const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingLayout />} >
          
          <Route index element={<Landing />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
       
          <Route path="*" element={<NotFound />} />
          
        </Route >
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/payment" element={<ProtectedRoute><Payment /></ProtectedRoute>} />
      </Routes>
    </>
  );
};

export default AppRoutes;
