import React from 'react';

const FooterBanner = () => {
    return (
        <div className='max-w-6xl mx-auto px-8 sm:px-17 pt-8'>
            <section className=' md:flex md:space-x-3 ' >
                <div className='relative py-4 md:py-10 cursor-pointer' >
                    <div className='relative h-[400px] min-w-[320px]  md:h-[450px] md:min-w-[480px]'>
                        <img src='/img/pic-1.jpg'
                            alt='img'
                            className='rounded-2xl'
                        />
                    </div>
                    <div className='absolute top-[90px] left-8'>
                        <h2 className='text-2xl md:text-4xl mb-3 w-50 text-white'>Six Things Solo Travel Teaches You</h2>
                        <p>You might stumble across a place or activity that</p>
                        <button className='text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-4 hover:opacity-80'>Get Inspired</button>
                    </div>
                </div>
                <div className='relative md:py-10 cursor-pointer' >
                    <div className='relative h-[400px] min-w-[320px]  md:h-[450px] md:min-w-[480px]'>
                        <img src='/img/pic-2.jpg'
                            alt='img'
                            className='rounded-2xl '
                        />
                    </div>
                    <div className='absolute top-[90px] left-8'>
                        <h2 className='text-2xl md:text-4xl mb-3 w-50 text-white'> Mountain Travel Destinations in the World</h2>
                        <p>Learn which mountain destinations</p>
                        <button className='text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-4 hover:opacity-80'>Get Inspired</button>
                    </div>
                </div>

            </section>
            <section className='relative py-16 cursor-pointer mt-8 '>
                <div className='relative '>
                    <img src='/img/footerBanner.jpg'
                        alt='img'
                        className='rounded-2xl h-[300px] md:h-[500px] w-[100%]'
                    />
                </div>
                <div className='absolute top-[80px] md:top-[125px] left-[40px] md:left-[80px]'>
                    <h2 className='text-2xl md:text-4xl mb-3 w-50'>The Greatest Outdoors</h2>
                    <p>Wishlists created by ToureWay</p>
                    <button className='text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-4'>Get Inspired</button>
                </div>
            </section>

        </div>
    );
};

export default FooterBanner;