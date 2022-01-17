import React, { useState } from 'react';
import { createSearchParams, Link, useNavigate } from 'react-router-dom';
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon, } from '@heroicons/react/solid'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import useAuth from '../Hooks/useAuth';

const Header = () => {
    const [searchInput, setSearchInput] = useState('')
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [guests, setGuestes] = useState(1);
    const navigate = useNavigate();
    const { user, loading, logoutUser } = useAuth();

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate)
    }

    const handleCancle = () => {
        setSearchInput('')
    }

    const params = {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        guests,
    }

    const handleSearch = () => {
        navigate({
            pathname: '/hotels',
            search: `?${createSearchParams(params)}`
        })
        setSearchInput('')
    }

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }
    const handleLogout = () => {
        logoutUser();
    }

    return (
        <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-3 px-5 md:px-10  '>

            <div
                onClick={() => navigate('/')}
                className='relative flex items-center h-10 cursor-pointer  '>
                <img src='/img/logo.png'
                    width={50}
                    height={50}
                    alt='logo'

                />
            </div >

            <div className='flex items-center border-2 rounded-full md:shadow-sm'>
                <input
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    className='flex-grow   md:pl-4 bg-transparent outline-none text-sm text-gray-600' type="text" placeholder={' Search your hotel'} />
                <SearchIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-1 cursor-pointer md:mx-2' />
            </div>

            <div className='flex items-center space-x-2 justify-end'>
                <p className='hidden md:inline cursor-pointer'>Become a host</p>
                <GlobeAltIcon className='h-6 cursor-pointer' />
                <Popup trigger={<button>
                    <div className='flex items-center space-x-1 border-2 p-1 rounded-full '>
                        <MenuIcon className='h-6' />
                        <UserCircleIcon className='h-6' />
                    </div>
                </button>} position="bottom right">
                    <div className='grid grid-cols-1'>

                        {
                            !user?.email && <>
                                <Link className='p-2 text-lg ' to={'/login'}> Login </Link>
                                <Link className='pl-2 text-lg  ' to={'/register'}> Sign up </Link>
                                <Link className='pl-2 text-lg  mt-2' to={'/booktrip'}> Your Trip </Link>
                            </>
                        }

                        {
                            user?.email && <button onClick={handleLogout} className='pl-2 text-lg mr-32 mt-4'>Logout</button>
                        }
                    </div>
                </Popup>

            </div>
            {searchInput && (
                <div className='flex flex-col col-span-4 w-[360px] md:w-[500px] mx-auto  '>
                    <DateRangePicker
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        rangeColors={['#FD5B61']}
                        onChange={handleSelect}
                    />

                    <div className='flex items-center border-b mb-4  '>
                        <h2 className='text-2xl flex-grow font-semibold'>Number of Guests</h2>
                        <UsersIcon
                            className='h-5'
                        />
                        <input
                            value={guests}
                            onChange={e => setGuestes(e.target.value)}
                            min={1}
                            type="number" className='w-12 pl-2 text-red-400' />
                    </div>
                    <div className='flex '>
                        <button onClick={handleCancle} className='flex-grow text-gray-600'>Cancel</button>
                        <button
                            onClick={handleSearch}
                            className='flex-grow text-red-600'>Search</button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;