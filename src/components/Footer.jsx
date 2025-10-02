import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-black text-gray-300 px-8 py-12'>
            <div className='grid grid-cols-5 gap-20 container mx-auto'>
                <div className=''>
                    <h3 className='text-white font-semi-bold mb-2'>CS-Ticket System</h3>
                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eveniet cum ex dolorum a! Modi ipsam repellendus consectetur facere rem nobis ratione natus rerum hic, suscipit voluptates saepe libero debitis?</p>
                </div>
                    <div>
                    <h4 className='text-white font-medium mb-5'>Company</h4>
                    <ul className='space-y-1 text-gray-400 mb-3'>
                        <li className='mb-3'>About Us</li>
                        <li className='mb-3'>Our Mission</li>
                        <li className='mb-3'>Contact Saled</li>
                    </ul>
                </div>
                <div>
                    <h4 className='text-white font-medium mb-5'>Services</h4>
                    <ul className='space-y-1 text-gray-400'>
                        <li className='mb-3'>Products & Service</li>
                        <li className='mb-3'>Customer Stories</li>
                        <li className='mb-3'>Download Apps</li>
                    </ul>
                </div>
                <div>
                    <h4 className='text-white font-medium mb-5'>Information</h4>
                    <ul className='space-y-1 text-gray-400'>
                        <li className='mb-3'>Privacy Policy</li>
                        <li className='mb-3'>Terms & Condition</li>
                        <li className='mb-3'>Join Us</li>
                    </ul>
                </div>
                <div>
                    <h4 className='text-white font-medium mb-5'>Social Links</h4>
                    <ul className='space-y-1 text-gray-400'>
                        <li className='mb-3'>@CS-Ticket System</li>
                        <li className='mb-3'>@CS-Ticket System</li>
                        <li className='mb-3'>@CS-Ticket System</li>
                        <li className='mb-3'>@support@cst.com</li>
                        
                    </ul>
                </div>
                <div className='flex justify-center text-center text-gray-500 text-sm'>
                    @ 2025 CS - Ticket System.
                    <br className='block md:hidden' />All rights reserved
                    
                </div>
                

            </div>

        </footer>
    );
};

export default Footer;