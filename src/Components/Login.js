import React, { useState } from 'react';
import {  Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Login = () => {
    const [user, setUser] = useState({});
    const {  loginUser, signInUsingGoogle} = useAuth();

    const location = useLocation();
    const navigate = useNavigate()

    const HandleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginUser = { ...user };
        newLoginUser[field] = value;
        setUser(newLoginUser);
    }

   const handleLogin = (e)=>{
        e.preventDefault();
        loginUser(user.email, user.password)
   }

    const handleGoogle = () => {
        signInUsingGoogle(navigate);
    }


    return (
        <div className='max-w-2xl mx-auto mt-16 mb-16 bg-gray-200 p-8 rounded-xl  '>
            <form onSubmit={handleLogin} className=''>
                <label htmlFor="">Email</label> <br />
                <input className='input'
                    type="email"
                    name='email'
                    onBlur={HandleOnBlur}
                    placeholder='Enter your email'
                /> <br />

                <label htmlFor="">Password</label> <br />
                <input className='input'
                    type="password"
                    name='password'
                    onBlur={HandleOnBlur}
                    placeholder='Enter your password'
                /> <br />
                <button type='submit' className='button border-red-400 hover:bg-red-400 hover:text-white font-semibold text-lg'>Login Now</button>
                <hr className='border-red-400 mb-4 border-t-2 mt-4 w-[70%]' />
            </form>

            <button onClick={handleGoogle} className='button border-red-400 hover:bg-red-400 hover:text-white font-semibold text-lg'> Login with Google</button> 

            <Link className='button border-red-400 hover:bg-red-400 hover:text-white font-semibold text-lg' to={'/register'}>New User? Please Register!! </Link>
        </div>
    );
};

export default Login;