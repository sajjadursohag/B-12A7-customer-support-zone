import React from 'react';
import Container from './Container';

const Navbar = () => {
    return (
        <div className='bg-white shadow-sm border-b-[0.5px] border-gray-300 mt-10'>

             <Container>
                
            </Container> 

            <nav className='px-4 py-4 flex justify-between items-center'>
                <h1 className='md:text-2xl text-sm font-bold text-bla'>CS-Ticket System</h1>
                <div className='flex items-center gap-6'>
                    <a href="#" className='text-black'>Home</a>
                    <a href="#" className='text-black'>FAQ</a>
                    <a href="#" className='text-black'>Changelog</a>
                    <a href="#" className='text-black'>Blog</a>
                    <a href="#" className='text-black'>Download</a>
                    <a href="#" className='text-black'>Contact</a>
                    <button className='bg-blue-700 font-semibold text-white px-5 py-1 rounded-sm cursor-pointer'>+ New Click</button>

                </div>

            </nav>

        </div>
    );
};

export default Navbar;