import React from 'react';
import Navbar from '../Components/Navbar'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useNavigate,
  } from "react-router-dom";
  import Copyright from '../Components/Copyright';

const NoPage = () => {
    return (
        <>
            <Navbar />
            <div className='flex flex-col justify-center items-center '>
                <div className='mt-32 dark:text-white'>
                    <div className=' text-center'>
                    <p className='text-6xl font-bold mb-3'>Oops !</p>
                    <p className='text-lg font-semibold'>404 - Page Not Found</p>
                    </div>
                    <p className='text-center mb-3'>The page you are looking for might have been removed <br />
                    its name changed or its temporary unavailable</p>
                </div>
                 <Link to={"/"}>
                <button class="mt-5 px-7 py-4 bg-[#DCD6C8] hover:bg-[#C3BAAB]  border-4 border-white rounded-md font-medium hover:-translate-y-3 duration-300">
                  Go Back Home Page
                </button>
                    </Link>
            </div>
            <Copyright />
        </>
    )
}

export default NoPage