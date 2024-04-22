import React from 'react';
import Image from '../Img/wiseman.png';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const Hero = () => {
    return (
        <>
            <div className='flex flex-row justify-center mt-10 h-screen gap-24'>
                <div className='rounded-full size-72 bg-blue-600 mt-4'>
                    <img src={Image} className='rounded-full size-64 ml-4 mt-4' alt="" />
                </div>
                <div className='w-96 h-80 bg-white rounded-lg'>
                    <div className='bg-transparent'>
                        <p className='mt-7 bg-transparent font-semibold text-4xl ml-5'>Hi, I'm <span className='bg-transparent'>David</span></p>
                        <p className='bg-transparent text-lg font-medium ml-5 mt-1'>I am a Full Stack Engineer</p>
                        <div className='flex flex-row gap-2 bg-transparent hover:translate-y-[-5px] duration-300 mt-2'>
                            <p className='ml-10 bg-transparent text-xs'>📌</p>
                            <p className='text-xs bg-transparent mb-2'>Based in Kigali, Rwanda</p>
                        </div>
                        <div className='flex flex-row gap-2 bg-transparent hover:translate-y-[-5px] duration-300'>
                            <p className='ml-8 bg-transparent text-lg'>🧑🏻‍💻</p>
                            <p className='text-xs bg-transparent mt-1'>Software Engineer | Web Designer</p>
                        </div>
                        <div className='flex flex-row gap-2 bg-transparent hover:translate-y-[-5px] duration-300'>
                            <p className='ml-8 bg-transparent text-lg'>👌🏻</p>
                            <p className='text-xs bg-transparent mt-1'>Let's join forces and create web magic!</p>
                        </div>
                        <div className='flex flex-row gap-2 bg-transparent hover:translate-y-[-5px] duration-300'>
                            <p className='ml-8 bg-transparent text-lg'>📨</p>
                            <p className='text-xs bg-transparent mt-2'>Send me an email</p>
                        </div>
                    </div>
                    <div className='bg-transparent'>
                        <div className='bg-transparent flex flex-row mt-10 gap-10 justify-center items-center '>
                            <FaTwitter className='bg-transparent text-4xl hover:translate-y-[-5px] duration-300 hover:text-gray-600' />
                            <FaInstagram className='bg-transparent text-4xl hover:translate-y-[-5px] duration-300 hover:text-gray-600'/>
                            <FaGithub className=' bg-transparent text-4xl hover:translate-y-[-5px] duration-300 hover:text-gray-600'/>
                            <FaLinkedin className='bg-transparent text-4xl hover:translate-y-[-5px] duration-300 hover:text-gray-600'/>
                        </div>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </>
    )
}

export default Hero