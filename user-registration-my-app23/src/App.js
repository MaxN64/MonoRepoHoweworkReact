import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

const App = () => (
  <Routes>
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
    <Route
      path="/profile"
      element={
        <PrivateRoute>
          <Profile />
        </PrivateRoute>
      }
    />
    <Route path="*" element={<Navigate to="/login" replace />} />
  </Routes>
);

export default App;
