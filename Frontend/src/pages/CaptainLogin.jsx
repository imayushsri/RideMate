import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CaptainDataContext } from '../context/CaptainContext';

const CaptainLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { captain, setCaptain } = useContext(CaptainDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const captaindets = {
      email: email,
      password: password
    };

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captaindets);

    if (response.status === 200) {
      const data = response.data;
      setCaptain(data.captain); // Update the captain state
      // console.log(data.captain);
      
      localStorage.setItem('token', data.token);
      navigate('/captain-home');
    }

    setEmail('');
    setPassword('');
  };

  return (
    <div className='flex flex-col h-screen justify-between p-7'>
      <div>
        <img src="../public/images/RideMateCaptain.png" className='w-30 mb-10' />
        <form onSubmit={submitHandler}>
          <h3 className='text-lg font-medium mb-2'>What's your email?</h3>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='bg-[#eeeeee] rounded text-lg w-full mb-7 placeholder:text-base px-4 py-2'
            placeholder='email@example.com'
          />

          <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className='bg-[#eeeeee] rounded text-lg w-full mb-7 placeholder:text-base px-4 py-2'
            placeholder='Password'
          />

          <button
            className='bg-[#111] rounded text-lg text-white w-full font-semibold mb-3 py-3'
          >
            Login
          </button>
        </form>
        <p className='text-center'>Want to Join a fleet? <Link to='/captain-signup' className='text-blue-600'> Register as a Captain</Link></p>
      </div>
      <div>
        <Link to='/login' 
          className='flex bg-[#d5622d] justify-center rounded text-lg text-white w-full font-semibold items-center mb-5 py-3'>
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;