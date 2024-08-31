// Login.js

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/login', formData);
      localStorage.setItem('token', res.data.token);
      navigate('/users');
      window.location.reload();
    } catch (error) {
      alert('Invalid credentials');
    }
  };

  const handleSignupRedirect = () => {
    navigate('/signup');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">Login</button>
      <br></br>
      Don't have an account? please Signup <br></br>
      <button type="button" onClick={handleSignupRedirect}>Signup</button>

    </form>


  );
}

export default Login;
