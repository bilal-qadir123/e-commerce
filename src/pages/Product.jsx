

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from 'react'; 
import { ShopContext } from '../context/ShopContext'; 
import { assets } from '../assets/frontend_assets/assets';
import RelatedProducts from '../components/RelatedProducts'; 
function Product() { 
  const { productId } = useParams(); 
  const { products, currency, cartItems, addToCart } = useContext(ShopContext); 
  const [productData, setProductData] = useState(null); 
  const [image, setImage] = useState(""); 
  const [size, setSize] = useState(""); 
  
  const fetchProductData = async () => { 
    products.forEach((item) => { 
      if (item._id === productId) { 
        setImage(item.image[0]); 
        setProductData(item); 
      } 
    });
  }; 

  useEffect(() => { 
    fetchProductData(); 
  }, [productId, products]); 

  const handleAddToCart = () => {
    addToCart(productData._id, size);
    setSize(""); 
  }; 

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'> 
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'> 
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'> 
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full product'> 
            {productData.image.map((item, index) => ( 
              <img 
                onClick={() => setImage(item)} 
                src={item} 
                key={index} 
                className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' 
                alt='product_img' 
              /> 
            ))} 
          </div> 
          <div className='w-full sm:w-[80%]'> 
            <img className='w-full h-auto'  src={image} alt='product_img' /> 

          </div>
        </div> 
        <div className='flex-1'> 
            <h1 className='font-medium text-2xl mt-2'> 
              {productData.name} 
            </h1> 
            <div className='flex items-center gap-1 mt-2'> 
              <img src={assets.star_icon} alt="" className="w-3 5" /> 
              <img src={assets.star_icon} alt="" className="w-3 5" /> 
              <img src={assets.star_icon} alt="" className="w-3 5" /> 
              <img src={assets.star_icon} alt="" className="w-3 5" /> 
              <img src={assets.star_dull_icon} alt="" className="w-3 5" /> 
              <p className='pl-2'> 
                (123 reviews) 
              </p>
            </div> 
            <p className='mt-5 text-3xl font-medium'> 
              {currency} 
              {productData.price} 
            </p> 
            <p className='mt-5 text-gray-500 md:w-4/5'> 
              {productData.description} 
            </p> 
            <div className='flex flex-col gap-4 my-8'> 
              <p> 
                Select Size 
              </p> 
              <div className='flex gap-2'> 
                {productData.sizes.map((item, index) => ( 
                  <button onClick = {() => setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? "bg-orange-500" : ""} `} key={index}> 
                    {item} 
                  </button> 
                ))} 
              </div> 
            </div> 
            <button onClick={() => handleAddToCart()} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'> 
                ADD TO CART 
            </button> 
            <hr className='mt-8 sm:w-4/5'> 
            </hr> 
            <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'> 
              <p> 100% Original Product </p> 
              <p> Cash On Delivery Is Available On This Product </p> 
              <p> Easy Return And Exchange Policy Within 7 Days </p> 
            </div>
        </div> 
      </div> 

      <div className='mt-20'> 
                <div className='flex'> 
                  <b className='border px-5 py-3 text-sm cursor-pointer'> 
                    Description 
                  </b> 
                  <p className='border px-5 py-3 text-sm cursor-pointer'> 
                    Reviews (123)
                  </p>
                </div> 
                <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'> 
                  <p> An e-commerce is an online business that allows consumers to buy and sell goods and services. It is an online business that allows consumers to buy and sell goods and services. The main purpose of e-commerce is to make money. Although it is an online business, it is not an online store. It is a form of electronic commerce. Some e-commerce platforms are online, while others are offline. Rapid growth of e-commerce is expected. </p>
                    <p> E-commerce is the process of buying and selling of goods or services online. It is a form of electronic commerce which allows consumers and businesses to directly buy goods or services from each other.</p>
                </div>
      </div> 
      <RelatedProducts category = {productData.category} subCategory = {productData.subCategory} /> 
    </div>
  ) : <div className='opacity-0'></div>; 
}

export default Product;
 