// useAuth.js

import { useEffect, useState } from 'react';

function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the JWT token is present in localStorage
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token); // Set true if token exists, false otherwise
  }, []);

  return isAuthenticated;
}

export default useAuth;
