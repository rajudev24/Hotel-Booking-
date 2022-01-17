import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className=' relative   '>
            <img src='/img/banner.jpg'
                layout='fill'
                alt='banner'
                objectFit='cover'
                className='w-[100%] h-[300px] sm:h-[400px] lg:h-[600px] xl:h-[800px] 2xl:h-[700px]'
            />
            <div className='absolute top-1/3 w-full text-center text-white '>
                <p className=' sm:text-lg md:text-5xl font-bold'>The journey is my home</p>
                <Link to={'/hotels'}>
                <button className='text-purple-500 bg-white px-8 py-3 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>I`m Ready</button>
                </Link>
            </div>
        </div>
    );
};

export default Banner;