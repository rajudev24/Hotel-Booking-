import React, { useEffect, useState } from 'react';

const Place = () => {
    const [places, setPlaces] = useState([])

    useEffect(() => {
        fetch(`https://whispering-tundra-09529.herokuapp.com/places`)
            .then(res => res.json())
            .then(data => setPlaces(data))
    }, [])

    return (
        <section className='max-w-6xl mx-auto px-8 sm:px-17 pt-8 ' >
            <h2 className='text-4xl font-semibold'>Explore Nearby</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>

                {
                    places?.map(place =>
                        <div key={place._id} className='flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out'>
                            <div className='relative  '>
                                <img src={place.img}
                                    layout='fill'
                                    alt='img'
                                    className='rounded-lg h-16 w-16 md:h-20 md:w-20'
                                />
                            </div>

                            <div >
                                <h2>{place.location} </h2>
                                <h3 className='text-gray-500'>{place.distance} </h3>
                            </div>
                        </div>
                    )
                }
            </div>
        </section>

    );
};

export default Place;