

import { assets } from '../assets/frontend_assets/assets' 

function Footer() {
  return (
    <div className='my-10 mt-40 text-sm'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 mb-10'> 
        <div> 
          <img src={assets.logo} className='mb-5 w-32' alt='logo'/> 
          <p className='w-full md:w-2/3 text-gray-600'> 
            Loreum Ipsum is simply dummy text of the printing and typesetting industry.
          </p> 
        </div> 

        <div> 
          <p className='text-xl font-medium mb-5'> 
            COMPANY 
          </p> 
          <ul className='flex flex-col gap-1 text-gray-600'> 
            <li> Home </li>
            <li> About Us </li>
            <li> Delivery </li>
            <li> Privacy Policy </li>
          </ul>
        </div> 

        <div> 
          <p className='text-xl font-medium mb-5'> 
            GET IN TOUCH 
          </p> 
          <ul className='flex flex-col gap-1 text-gray-600'> 
            <li> 123-456-7890 </li> 
            <li> 123-456-7891 </li> 
            <li> Meowlish@gmail.com </li> 
          </ul> 
        </div> 
      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'> 
          Copyright 2024 @ Meowlish.com - All Rights Reserved 
        </p>
      </div>
    </div>
  );
}

export default Footer;
