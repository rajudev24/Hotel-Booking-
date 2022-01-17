import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';
import { DateRangePicker } from 'react-date-range';

const BookNow = () => {
    const { id } = useParams()
    
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const [hotel, setHotel] = useState()

    useEffect(() => {
        fetch(`https://whispering-tundra-09529.herokuapp.com/hotels/${id}`)
            .then(res => res.json())
            .then(data => setHotel(data))
    }, )

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate)
    }

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }

    return (

        <div className='md:flex max-w-6xl mx-auto  sm:px-17 pt-8'>
            <div >
                <h1 className='font-bold mb-8 text-4xl inline-block'>Request to Book</h1>
                <div className=''>
                    <img src={hotel?.img}
                        className='rounded-lg '
                        alt="" />
                    <h3 className='text-lg font-semibold mt-4 '> {hotel?.title} </h3>
                    <h4 className='text-gray-700 font-semibold  '>{hotel?.description} </h4>
                    <h2 className='text-2xl font-semibold mt-2'> BDT {hotel?.price} </h2>
                </div>
            </div>
            <div className='flex-start md:w-[60%]'>
                <h2 className='font-bold mb-8 text-4xl '>Reserve your Room</h2>
                <form >
                    <DateRangePicker
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        rangeColors={['#FD5B61']}
                        onChange={handleSelect}

                    />
                    <input type="text" placeholder='Your Name' 
                    className='input'
                    /> <br />
                    <input type="email" placeholder='Your email'
                    className='input'
                     /> <br />
                </form>
            </div>
        </div>

    );
};

export default BookNow;