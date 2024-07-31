"use client";

import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/slices/userSlice';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleRegister = async () => {
    try {
      const response = await axios.post('/api/users/register', { email, password });
      const { user, token } = response.data;
      dispatch(setUser({ user, token }));
    } catch (error) {
      console.error('Error registering:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button onClick={handleRegister}>Login</button>
    </div>
  );
};

export default Register;
