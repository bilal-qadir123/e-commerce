

import React from 'react';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/frontend_assets/assets'; 
import { useState, useContext } from 'react'; 
import { ShopContext } from '../context/ShopContext'; 

function PlaceOrder() { 
  
  const [method, setMethod] = useState("cod"); 
  const { navigate } = useContext(ShopContext);   

  return ( 
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      <div className="flex-1 flex-col gap-4 sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>

        <div className="flex gap-3">
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="First Name" />
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Last Name" />
        </div>

        <div className='mt-3'> 
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full mb-3" type="email" placeholder="Email Address" />
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Street" />
        </div> 

        <div className="flex gap-3 mt-3"> 
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="City" />
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="State" />
        </div>

        <div className="flex gap-3 mt-3"> 
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Zip Code" /> 
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Country" />
        </div> 

        <div className="flex gap-3 mt-3"> 
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="tel" placeholder="Phone" />
        </div> 
      </div>

      <div className="flex flex-col gap-4 w-full sm:w-[500px]">
        <div className="mt-8">
          <CartTotal />
        </div>
        <div className="mt-8">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          <div className="flex gap-3 flex-col lg:flex-row">
            <div onClick={() => setMethod("easypaisa")} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "easypaisa" ? "bg-green-500" : "" }`}></p>
              <img className="h-7 mx-4" src={assets.easypaisa_logo} alt="" />
            </div>
            <div onClick={() => setMethod("jazzcash")} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "jazzcash" ? "bg-green-500" : "" }`}></p> 
              <img className="h-7 mx-4" src={assets.jazz_cash_logo} alt="" />
            </div> 
            <div onClick={() => setMethod("cod")} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "cod" ? "bg-green-500" : "" }`}></p> 
              <p className="text-gray-500 text-sm font-medium mx-4">CASH ON DELIVERY</p> 
            </div> 
          </div> 

          <div className="w-full text-end mt-8"> 
            <button onClick={() => navigate("/orders")} className="bg-black text-white px-16 py-3 text-sm active:hover:bg-gray-600">PLACE ORDER</button> 
          </div> 
        </div> 
      </div>
    </div> 
  );
}

export default PlaceOrder;
 