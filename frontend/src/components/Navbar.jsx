import {assets} from '../assets/frontend_assets/assets';
import { useState } from 'react';

const Navbar = () => {
    const [menu, setMenu] = useState('home');

    const handleMenu = (tab) => {
        setMenu(tab)
    };

  return (
    <div className='py-6 flex justify-between items-center'>
        <img src={assets.logo} alt="logo" className='w-[150px]' />
        <ul className='flex gap-5 text-[#49557e] list-none'>
            <li 
            className={`cursor-pointer ${menu === 'home' && 'pb-0.5 border-b-2'}`} 
            onClick={() => handleMenu('home')}>Home</li>
            <li 
            className={`cursor-pointer ${menu === 'menu' && 'pb-0.5 border-b-2'}`}  
            onClick={() => handleMenu('menu')}>Menu</li>
            <li 
            className={`cursor-pointer ${menu === 'contact' && 'pb-0.5 border-b-2'}`} 
            onClick={() => handleMenu('contact')}>Contact Us</li>
        </ul>
        <div className='flex items-center gap-10'>
            <img src={assets.search_icon} alt="search" />
            <div className='relative'>
                <img src={assets.basket_icon} alt="basket" />
                <div className='bg-[#FF4D25] absolute -top-2 -right-2 min-w-2.5 min-h-2.5 rounded-full'></div>
            </div>
            <button className='bg-transparent text-[#49557e] border border-solid border-[#FF4D25] py-2.5 px-8 rounded-[50px] cursor-pointer hover:border-[#fff4f2] transition duration-[0.3]'>Sign In</button>
        </div>
    </div>
  )
}

export default Navbar