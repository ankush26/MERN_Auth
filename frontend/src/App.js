// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import UserList from './UserList';
import useAuth from './useAuth'; // Import the custom hook

function App() {
  const isAuthenticated = useAuth(); // Check if the user is authenticated

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/signup" element={isAuthenticated ? <Navigate to="/users" />: <Signup />} />
          <Route
            path="/login"
            element={isAuthenticated ? <Navigate to="/users" /> : <Login />}
          />
          {/* Protected Route for Users */}
          <Route
            path="/users"
            element={isAuthenticated ? <UserList /> : <Navigate to="/login" />}
          />
          {/* Redirect any unknown route to login page */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
