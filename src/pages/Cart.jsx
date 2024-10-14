

import { useContext, useState, useEffect } from 'react'; 
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title'; 
import { assets } from '../assets/frontend_assets/assets'; 
import CartTotal from '../components/CartTotal'; 
import { toast } from 'react-toastify';

function Cart() {
  const { products, currency, cartItems, deleteProduct, navigate, getCartAmount } = useContext(ShopContext); 
  const [cartData, setCartData] = useState([]); 
  
  console.log(cartItems); 

  useEffect(() => {

    const tempData = []; 
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        if (cartItems[itemId][size] > 0) {
          tempData.push({
            _id: itemId,
            size: size,
            quantity: cartItems[itemId][size],
          });
        }
      }
    }


    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1={"SHOPPING"} text2={"CART"} />
      </div>
      <div>
        {cartData.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartData.map((item) => {
            const productData = products.find(
              (product) => product._id === item._id
            );


            if (!productData) return null;

            return (
              <div
                key={item._id + item.size} 
                className="py-2 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_0.5fr_0.5fr] items-center gap-4"
              >
                <div className="flex items-start gap-6">
                  <img
                    className="w-16 sm:w-20"
                    src={productData.image?.[0] || ''} 
                    alt={productData.name}
                  />
                  <div>
                    <p className="text-sm sm:text-lg font-medium">
                      {productData.name}
                    </p>
                    <div className='flex items-center gap-5 mt-2'> 
                    <p> 
                      {currency} {productData.price}
                    </p> 
                    <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'> 
                      {item.size}
                    </p>
                      </div> 
                  </div>
                </div> 
                <input onChange={(e) => e.target.value === "" || e.target.value === "0" ? null : deleteProduct(item._id, item.size, Number(e.target.value))} className='text-center font-bold max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' type = "number" min = {1} defaultValue={item.quantity} /> 
                <img onClick = {() => deleteProduct(item._id, item.size, 0)} className = 'w-4 mr-4 sm:w-5 cursor-pointer active:scale-90' src = {assets.bin_icon} alt = "bin_icon" /> 
              </div> 
            ); 
          })
        )}
      </div> 

      <div className='flex justify-end my-20'> 
      <div className='w-full sm:w-[450px]'> 
        <CartTotal /> 
        
       
          <div className='w-full text-end'> 
          <button onClick={() => {cartData.length === 0 ? toast.error("No Products In The Cart") : (navigate('/place-order'))}} className='bg-black text-white text-sm my-8 px-8 py-3 active:hover:bg-gray-600'> 
            PROCEED TO CHECKOUT 
          </button> 
        </div> 
       
      </div>

      </div>
    </div>
  );
}

export default Cart;
 