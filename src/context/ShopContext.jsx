

import React, { useEffect, useState, createContext } from 'react';
import { products } from '../assets/frontend_assets/assets';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  const currency = '$';
  const deliveryFee = 10;
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    return savedCartItems ? JSON.parse(savedCartItems) : {};
  });

  const addToCart = (id, size) => {
    if (!size) {
      toast.error('Select Product Size');
      return;
    }
    
    toast.success('Product Added To Cart');

    setCartItems(prevCartItems => {
      const updatedCartItems = { ...prevCartItems };

      if (!updatedCartItems[id]) {
        updatedCartItems[id] = {};
      }

      if (!updatedCartItems[id][size]) {
        updatedCartItems[id][size] = 0;
      }

      updatedCartItems[id][size] += 1;
      return updatedCartItems;
    });
  };

  const getCartCount = () => {
    return Object.values(cartItems).reduce(
      (totalCount, sizes) =>
        totalCount +
        Object.values(sizes).reduce((sizeCount, count) => sizeCount + count, 0),
      0
    );
  };

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const deleteProduct = (itemId, size, quantity) => {
    setCartItems(prevCartItems => {
      const updatedCartItems = { ...prevCartItems };

      if (updatedCartItems[itemId] && updatedCartItems[itemId][size]) {
        updatedCartItems[itemId][size] = quantity;

        // Clean up if the quantity is 0
        if (updatedCartItems[itemId][size] <= 0) {
          delete updatedCartItems[itemId][size];
        }
        if (Object.keys(updatedCartItems[itemId]).length === 0) {
          delete updatedCartItems[itemId];
        }
      }

      return updatedCartItems;
    });
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      const itemInfo = products.find(product => product._id === itemId);

      if (!itemInfo) continue; 

      for (const size in cartItems[itemId]) {
        const quantity = cartItems[itemId][size];
        if (quantity > 0) {
          totalAmount += itemInfo.price * quantity;
        }
      }
    }
    return totalAmount;
  };

  const value = {
    products,
    currency,
    deliveryFee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    deleteProduct,
    getCartAmount,
    navigate
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
 }; 

export default ShopContext;
 