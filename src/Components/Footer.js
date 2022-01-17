import React from 'react';

const Footer = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-5 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
            <div className='space-y-4 text-xs text-gray-400'>
                <h5 className='font-bold'>ABOUT</h5>
                <p>How Toureway works</p>
                <p>Newsroom</p>
                <p>Investors</p>
                <p>Toureway Guide</p>
                <p> Toureway Luxries</p>
            </div>
            <div className='space-y-4 text-xs text-gray-400'>
                <h5 className='font-bold'>Links</h5>
                <p>Contact us</p>
                <p>Investore Contact</p>
                <p>Join Program</p>
                <p>Get Update</p>
                <p> Privacy & Policy</p>
            </div>
            <div className='space-y-4 text-xs text-gray-400'>
                <h5 className='font-bold'>Social Links</h5>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>
                <p>Linkedin</p>
                <p>Youtube</p>
            </div>
            <div className='space-y-4 text-xs text-gray-400'>
                <h5 className='font-bold'>Support</h5>
                <p>Help Center</p>
                <p>Safety Information</p>
                <p>Cancellation optios</p>
                <p>Support disabilites people</p>
                <p> Female Help</p>
            </div>
            <div className='space-y-4 text-xs text-gray-400'>
                <h5 className='font-bold'>Community</h5>
                <p>Our Blog</p>
                <p>Forum</p>
                <p>Carrers</p>
                <p>Our Founders</p>
                <p> Toureway CEO</p>
            </div>

        </div>
    );
};

export default Footer;