import React, { useEffect, useState } from 'react';

const ImageCard = () => {

    const [images, setImages] = useState([])

    useEffect(() => {
        fetch(`https://whispering-tundra-09529.herokuapp.com/images`)
            .then(res => res.json())
            .then(data => setImages(data))
    }, [])

    return (
        <div className='max-w-6xl mx-auto px-8 sm:px-17 mt-8'>
            <h2 className='text-4xl font-semibold py-8'>Explore Places & Live Anywhere</h2>
            <div className='flex space-x-3 overflow-scroll scrollbar-hide  p-3 -ml-3 '>
                {
                    images.map(image =>
                        <div key={image._id} className='cursor-pointer hover:scale-105 transform transition duration-300 ease-out '>
                            <div className='relative h-60 w-60'>
                                <img src={image.img}  alt='img'
                                    className='rounded-xl  h-60 w-60'
                                />
                            </div>
                            <h3 className='text-2xl mt-3'>{image.name} </h3>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ImageCard;