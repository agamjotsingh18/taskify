"use client";

import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/slices/userSlice';

const Signup = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSignup = async () => {
    try {
      const response = await axios.post('/api/users/register', { fullname, email, password });
      const { user, token } = response.data;
      dispatch(setUser({ user, token }));
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <input type="text" placeholder="Full Name" value={fullname} onChange={(e) => setFullname(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default Signup;
