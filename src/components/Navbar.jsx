

import { useState, useContext } from 'react';
import { assets } from '../assets/frontend_assets/assets';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

function Navbar() {
  const [visible, setVisible] = useState(false);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const { showSearch, setShowSearch, getCartCount } = useContext(ShopContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [prevPage, setPrevPage] = useState(null);

  const handleLogout = () => {
    if (window.location.pathname !== '/login') {
      setShowLogoutPopup(true);
    }
  };

  const confirmLogout = () => {
    setShowLogoutPopup(false);
    navigate('/login');
  };

  const cancelLogout = () => {
    setShowLogoutPopup(false);
  };

  const handleCartClick = () => {
    if (location.pathname !== '/cart') {
      setPrevPage(location.pathname);
      navigate('/cart'); 
    } else if (prevPage) { 
      navigate(prevPage); 
      setPrevPage(null); 
    } 
  }; 

  return ( 
    <div className='flex items-center justify-between font-medium'>
      <Link to='/'>
        <img src={assets.logo} className='w-36 cursor-pointer' style={{ width: '125px', marginTop: "-10px" }} alt='logo' />
      </Link>

      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink to='/' className='flex flex-col items-center gap-1 header'>
          <p>HOME</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/collection' className='flex flex-col items-center gap-1 header'>
          <p>COLLECTION</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/about' className='flex flex-col items-center gap-1 header'>
          <p>ABOUT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink> 
        <NavLink to='/contact' className='flex flex-col items-center gap-1 header'>
          <p>CONTACT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
      </ul>

      <div className='flex items-center gap-6'>
        <img onClick={() => setShowSearch(!showSearch)} src={assets.search_icon} className='w-5 cursor-pointer hover:scale-110 transition ease-in-out' alt='search' />

        <div className='group relative'>
          <img className='w-5 cursor-pointer hover:scale-110 transition ease-in-out' src={assets.profile_icon} alt='profile' />
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500'>
              <p className='cursor-pointer hover:text-black'> My profile </p>
              <Link to="/orders">
                <p className='cursor-pointer hover:text-black'> My orders </p>
              </Link>
              <p onClick={handleLogout} className='cursor-pointer hover:text-black'> Logout </p>
            </div>
          </div>
        </div>

        <div className='relative' style={{ textDecoration: 'none' }}>
          <img
            onClick={handleCartClick}
            src={assets.cart_icon}
            className='w-5 cursor-pointer hover:scale-110 transition ease-in-out'
            alt='cart'
          />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-red-600 text-white aspect-square rounded-full text-[-8px]' style={{ fontSize: '10px' }}>
            {getCartCount()}
          </p>
        </div>

        <img onClick={() => setVisible(!visible)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden hover:scale-110 transition ease-in-out' alt='menu' />
      </div>

      <div className={`absolute top-3 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
        <div className='flex flex-col text-gray-600'>
          <div onClick={() => setVisible(!visible)} className='flex items-center gap-4 p-3'>
            <img className='h-4 rotate-180 cursor-pointer' src={assets.dropdown_icon} alt='dropdown' />
            <p className='cursor-pointer'> Back </p> 
          </div>
          <NavLink onClick={() => setVisible(!visible)} className='py-2 pl-7 border' to='/'> HOME </NavLink>
          <NavLink onClick={() => setVisible(!visible)} className='py-2 pl-7 border' to='/collection'> COLLECTION </NavLink>
          <NavLink onClick={() => setVisible(!visible)} className='py-2 pl-7 border' to='/contact'> CONTACT </NavLink> 
          <NavLink onClick={() => setVisible(!visible)} className='py-2 pl-7 border' to='/about'> ABOUT </NavLink> 
        </div>
      </div>

      {showLogoutPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 h-44 shadow-lg text-center">
            <p className="mb-4">Are you sure you want to logout?</p>
            <div className="flex justify-between m-10">
              <button onClick={confirmLogout} className="px-4 py-2 bg-black text-white hover:bg-gray-700">
                Yes
              </button>
              <button onClick={cancelLogout} className="px-4 py-2 bg-gray-300 hover:bg-gray-400">
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
 } 

export default Navbar;
