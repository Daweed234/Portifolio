import React from 'react';
import Navbar from '../Components/Navbar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useNavigate,
  } from "react-router-dom";

const NoPage = () => {
    return (
        <>
            <Navbar />
            <div className='flex flex-col justify-center items-center mb-32'>
                <div className='mt-32'>
                    <div className=' text-center'>
                    <p className='text-6xl font-bold mb-3'>Oops !</p>
                    <p className='text-lg font-semibold'>404 - Page Not Found</p>
                    </div>
                    <p className='text-center mb-3'>The page you are looking for might have been removed <br />
                    its name changed or its temporary unavailable</p>
                </div>
                <Link to={"/"}>
                <button class="px-7 py-4 bg-[#DCD6C8] border-4 border-white rounded-md font-medium hover:-translate-y-3 duration-300">
                  Go Back Home Page
                </button>
                    </Link>
            </div>
        </>
    )
}

export default NoPage