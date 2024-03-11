import { shop } from '@/assets'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    
  return (
    <div className='nav w-[100%] h-[70px]  flex items-center justify-around fixed bg-white top-0 '>
        <Image src={shop} alt="alif shop" />
        <button className='bg-green-500 w-[180px] h-[40px] rounded-lg'> <i className="fa-solid fa-bars"></i>  Tolovlar katalogi</button>
        <input placeholder='Tovarlarni izlash' type="text" className=' w-[360px] h-[40px] p-3 bg-green-500 text-black' />
        <h2 className='cursor-pointer'>Savat</h2>
        <h2  className='cursor-pointer'>Saralanganlar</h2>
        <button  className='cursor-pointer'>Kirish</button>
    </div>
  )
}

export default Navbar
