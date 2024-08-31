// UserList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserList() {
  const [users, setUsers] = useState([]);
  const [role, setRole] = useState('');
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get('http://localhost:5000/users', {
          headers: { Authorization: `Bearer ${token}` },
          params: { role },
        });
        setUsers(res.data);
      } catch (error) {
        alert('Error retrieving users');
      }
    };
    fetchUsers();
  }, [role, token]);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token from localStorage
    window.location.reload();
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
      <br></br><br></br>
      <select onChange={(e) => setRole(e.target.value)} value={role}>
        <option value="">All Roles</option>
        <option value="User">User</option>
        <option value="Admin">Admin</option>
        <option value="Guest">Guest</option>
      </select>
      <ul>
        {users.map((user) => (
          <li key={user._id}>{user.firstName} {user.lastName} - {user.role}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
