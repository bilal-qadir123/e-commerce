

import { useContext } from 'react'; 
import { Link } from 'react-router-dom'; 
import { ShopContext } from '../context/ShopContext'; 

function ProductItem({ id, image, name, price }) { 

  const { currency } = useContext(ShopContext); 

  if (!id) {
    return <div>Product ID not available</div>; 
  }

  return ( 
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}> 
      <div className='overflow-hidden'> 
        <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt={name} /> 
      </div> 
      <p className='pt-3 pb-1 text-sm'> {name} </p> 
      <p className='text-sm font-medium'> {currency} {price} </p> 
    </Link> 
  );
}

export default ProductItem; 