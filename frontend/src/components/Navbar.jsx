import { assets } from '../assets/frontend_assets/assets';
import { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { StoreContext } from '../context/StoreContext';

const Navbar = ({ setShowLoginSignup }) => {
    const [menu, setMenu] = useState('home');

    const { cartItems } = useContext(StoreContext);

    const handleLoginSignup = () => {
        setShowLoginSignup(true);
    }

    const handleMenu = (tab) => {
        setMenu(tab)
    };

    return (
        <div className='py-6 flex justify-between items-center'>
            <Link to='/'>
                <img src={assets.logo} alt="logo" className='w-[100px] lg:w-[150px]' />
            </Link>
            <ul className='hidden md:flex md:gap-3 lg:gap-5 text-[#49557e] list-none lg:text-lg'>
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
            <div className='flex items-center gap-3 md:gap-6 lg:gap-10'>
                <img src={assets.search_icon} alt="search" className='w-3 md:w-5' />
                <div className='relative'>
                    <Link to='/cart'>
                        <img src={assets.basket_icon} alt="basket" className='w-3 md:w-5' />
                    </Link>
                    {
                        Object.keys(cartItems).length > 0 &&
                        <div className='bg-[#FF4D25] absolute -top-2 -right-2 min-w-2.5 min-h-2.5 rounded-full'></div>
                    }
                </div>
                <button className='bg-transparent text-[#49557e] border border-solid border-[#FF4D25] rounded-[50px] cursor-pointer hover:border-[#fff4f2] transition duration-[0.3]
            text-xs py-1.5 px-4 md:py-2.5 md:px-8 md:text-base lg:text-lg'
                    onClick={handleLoginSignup}
                >Sign In</button>
            </div>
        </div>
    )
}

export default Navbar