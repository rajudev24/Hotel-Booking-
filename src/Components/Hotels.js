import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { format } from 'date-fns';
import Hotel from './Hotel';
import GoogleMap from './GoogleMap';


const Hotels = () => {
    const [searchParams, ] = useSearchParams();
    const location = searchParams.get('location')
    const startDate = searchParams.get('startDate')
    const endDate = searchParams.get('endDate')
    const guests = searchParams.get('guests')

    const [hotels, setHotels] = useState([]);
 
    const formattedStartdate = format(new Date(startDate), 'dd MMMM yy')
    const formattedEndtdate = format(new Date(endDate), 'dd MMMM yy')
    const range = `${formattedStartdate} - ${formattedEndtdate}`

    useEffect(()=>{
        fetch('https://whispering-tundra-09529.herokuapp.com/hotels')
        .then(res=> res.json())
        .then(data=> setHotels(data))
    },[])

   
    return (
        <div>
            
            <main className='flex'>
            <section className='flex-grow pt-14 px-6'>
                    <p className='text-xs'>300+ Stays - {range} - {guests}  guests</p>
                    <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location} </h1>
                    <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                        <p className='button'>Cancellation Flexibility</p>
                        <p className='button'>Type of Place</p>
                        <p className='button'>Price </p>
                        <p className='button'>Rooms & Bands </p>
                        <p className='button'>More filters </p>
                    </div>
                    <div>
                        {
                            hotels?.map(hotel =>
                                
                                <Hotel 
                                key={hotel._id}
                                hotel={hotel}
                                />
                                
                            )
                        }
                    </div>
                </section>
                <section className='hidden xl:inline-flex xl:min-w-[600px]'>
                    <GoogleMap hotels={hotels} />
                    
                </section>
            </main>
        </div>
    );
};

export default Hotels;