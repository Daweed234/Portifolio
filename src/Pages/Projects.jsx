import React from 'react';
import Navbar from '../Components/Navbar';
import Copyright from '../Components/Copyright';

const Projects = () => {
    return (
        <>
            <Navbar />
            {/* <div className='flex justify-center items-center flex-col'>
        <p className='text-5xl font-semibold'></p>
        <p></p>
        <p>😮‍💨</p>
    </div> */}
            <div className='py-32'>
                <div className=' text-center'>
                    <p className='text-6xl font-bold mb-3 md:text-3xl dark:text-white'>Guess what.....</p>
                    <p className='text-lg font-semibold dark:text-white'>We are still working on it</p>
                </div>
                <p className='text-center text-8xl py-3'>😮‍💨</p>
            </div>
            <Copyright />
        </>
    )
}

export default Projects