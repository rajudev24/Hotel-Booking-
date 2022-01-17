import { LocationMarkerIcon, StarIcon } from '@heroicons/react/solid';
import { HeartIcon } from '@heroicons/react/outline';
import React from 'react';
import { Link } from 'react-router-dom';

const Hotel = (props) => {
    const { img, location, title, description, price, total, star, _id } = props.hotel;
    return (
        <div className=' md:flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t'>
            <div className='relative '>
                <img src={img}
                    alt='img'
                    priority='true'
                    className='rounded-xl h-24 w-40 md:h-52 md:w-[350px] flex-shrink-0'
                />
            </div>
            <div className='flex flex-col flex-grow md:pl-5'>
                <div className='flex justify-between'>
                    <div className='flex items-center '>
                        <LocationMarkerIcon className='h-4' />
                        <p> {location} </p>
                    </div>

                    <HeartIcon className='h-7 cursor-pointer' />

                </div>
                <h4 className='text-xl '>{title} </h4>
                <div className='border-b w-10 pt-2' />
                <p className='pt-2 text-sm text-gray-500 flex-grow'>{description} </p>
                <div className='flex justify-between items-end pt-5'>
                    <div>
                        <Link to={`/book/${_id}`}>
                            <button className=' font-semibold border-2 p-2 rounded-xl hover:bg-red-600 hover:text-white py-2 px-4 border-red-400 hover:shadow-lg  active:scale-95 transition transform duration-100 ease-out'>Book Now</button> </Link>
                        <p className='flex items-center'>

                            <StarIcon className='h-5 text-red-400' />
                            {star}
                        </p>
                    </div>


                    <div>
                        <p className='text-lg lg:text-2xl font-semibold pb-2'>
                            BDT- {price}
                        </p>
                        <p className='text-right font-extralight'>
                            BDT- {total} total
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hotel;