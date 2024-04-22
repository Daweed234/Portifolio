import React from 'react'

const Navbar = () => {
  return (
    <div>
       <nav className='px-5 py-5'>
            <div className='flex flex-row justify-center items-center gap-20 text-[12px]'>
            <p className='hover:translate-y-[-5px] duration-300'>Home</p>
            <p className='hover:translate-y-[-5px] duration-300'>About</p>
            <p className='hover:translate-y-[-5px] duration-300'>Service</p>
            <p className='hover:translate-y-[-5px] duration-300'>Contact</p>
            <p className='hover:translate-y-[-5px] duration-300'>Icon</p>
            </div>
        </nav>

    </div>
        
  )
}

export default Navbar