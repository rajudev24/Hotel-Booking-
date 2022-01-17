import React, { useState } from 'react';
import {  Link, useNavigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Register = () => {
    const [logInUser, setLogInUser] = useState({});
    const navigate = useNavigate()
    const {signInUsingGoogle, registerUser} = useAuth();

    const HandleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginUser = { ...logInUser };
        newLoginUser[field] = value;
        setLogInUser(newLoginUser);
    }
    

    const handleRegister = e => {
        if(logInUser.password !==logInUser.password2){
            alert('Password did not match')
            return
        }
        registerUser(logInUser.email, logInUser.email, navigate)
        e.preventDefault();
    }

    const handleGoogle = () => {
        signInUsingGoogle();
    }
    
    return (
        <div className='max-w-2xl mx-auto mt-16 mb-16 bg-gray-200 p-8 rounded-xl  '>
            <form onSubmit={handleRegister} className=''>
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
                <label htmlFor="">Retype password</label> <br />
                <input className='input'
                    type="password2"
                    name='password2'
                    onBlur={HandleOnBlur}
                    placeholder='Enter your password'
                /> <br />
                <button type='submit' className='button border-red-400 hover:bg-red-400 hover:text-white font-semibold text-lg'>Register Now</button>
                <hr className='border-red-400 mb-4 border-t-2 mt-4 w-[70%]' />

                

            </form>
            <button onClick={handleGoogle} className='button border-red-400 hover:bg-red-400 hover:text-white font-semibold text-lg'> Login with Google</button> 

            <Link className='button border-red-400 hover:bg-red-400 hover:text-white font-semibold text-lg' to={'/login'}>Registred User? Please Login!! </Link>
        </div>
    );
};

export default Register;