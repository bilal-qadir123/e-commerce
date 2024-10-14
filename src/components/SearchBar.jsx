

import { useContext } from 'react'; 
import { ShopContext } from '../context/ShopContext'; 
import { assets } from '../assets/frontend_assets/assets'; 

function SearchBar() { 
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext); 
  
  return (
    <div className={`search-container text-center ${showSearch ? 'open' : ''}`}>
      <div className='inline-flex h-10 items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'> 
        <input 
          value={search} 
          onChange={(event) => setSearch(event.target.value)}
          className='flex-1 outline-none bg-inherit text-sm' 
          type="text" 
          placeholder='Search...' 
        /> 
        <img className='inline w-4 m-3 cursor-pointer' src={assets.search_icon} alt='search' /> 
        <img 
          onClick={() => setShowSearch(!showSearch)} 
          className='inline w-3 cursor-pointer' 
          src={assets.cross_icon} 
          alt='close' 
        /> 
      </div> 
    </div> 
  ); 
 } 

export default SearchBar;
 