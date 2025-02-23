import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserSignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userData, setUserData] = useState({});
  const submitHandler = (e) =>{
    e.preventDefault();
    setUserData({
      fullName:{
        firstName: firstName,
        lastName: lastName
      },
      email: email,
      password: password
    });
    
    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');
    }
  return (
    <div>
      <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img src="../public/images/RideMate.png" className='w-30 mb-5' />
        <form onSubmit={(e) => {
          submitHandler(e)
        }}>
        <h3 className='text-lg font-medium mb-2'>What's your name?</h3>
        <div className='flex gap-3 mb-7'>
        <input
          type='text'
          value={firstName}
          onChange={(e)=>{
            setFirstName(e.target.value);
          }}
            required
            className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 text-lg placeholder:text-base'
            placeholder='First name...'
          />
          <input
            type='text'
            value={lastName}
          onChange={(e)=>{
            setLastName(e.target.value);
          }}
            required
            className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 text-lg placeholder:text-base'
            placeholder='Last name...'
          />
        </div>

          <h3 className='text-lg font-medium mb-2'>What's your email?</h3>
          <input
            type='email'
            value={email}
          onChange={(e)=>{
            setEmail(e.target.value);
          }}
            required
            className='bg-[#eeeeee] rounded px-4 py-2 mb-7 w-full text-lg placeholder:text-base'
            placeholder='email@example.com'
          />

          <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
          <input
            type='password'
            value={password}
          onChange={(e)=>{
            setPassword(e.target.value);
          }}
            required
            className='bg-[#eeeeee] rounded px-4 py-2 mb-7 w-full text-lg placeholder:text-base'
            placeholder='Password'
          />

          <button
            className='bg-[#111] rounded text-white py-3 mb-3 w-full font-semibold text-lg'
          >
            Register
          </button>
        </form>
          <p className='text-center'>Already have an Account? <Link to='/login' className='text-blue-600'> Login Here</Link></p>
      </div>
      <div>
        <p className='text-[10px] leading-tight'>By proceeding, you consent to get mails, including by automated means,
          from RideMate and its affiliates to the email provided.
        </p>
      </div>
    </div>
    </div>
  )
}

export default UserSignUp
