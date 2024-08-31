// Signup.js

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', mobile: '', role: 'User', password: '' });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/signup', formData);
      alert('User registered successfully, pleaae login');
      navigate('/login');
    } catch (error) {
      alert('Error in registration');
    }
  };

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="firstName" type="text" placeholder="First Name" onChange={handleChange} required />
      <input name="lastName" type="text" placeholder="Last Name" onChange={handleChange} required />
      <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
      <input name="mobile" type="text" placeholder="Mobile" onChange={handleChange} required />
      <select name="role" onChange={handleChange} value={formData.role}>
        <option value="User">User</option>
        <option value="Admin">Admin</option>
        <option value="Guest">Guest</option>
      </select>
      <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">Signup</button>
      <br></br>
      Alredy have an account? please Login <br></br>
      <button type="button" onClick={handleLoginRedirect}>Login</button>
    </form>
  );
}

export default Signup;
