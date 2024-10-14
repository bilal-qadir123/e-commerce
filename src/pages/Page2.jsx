



import { useContext, useEffect, useState } from 'react' 
import { ShopContext } from '../context/ShopContext' 
import Title from '../components/Title'; 
import ProductItem from '../components/ProductItem'; 
import Pagination from '../components/Pagination'; 
function Page2() { 

  const { products } = useContext(ShopContext); 
  const [latestProducts, setLatestProducts] = useState([]); 

  useEffect(() => {   
    setLatestProducts(products.slice(30, 70)); 
  }, [products]) 

  return (
    <div className='my-5'> 
      <div className='text-center py-8 text-4xl ml-20'> 
      <Title text1 = {'LATEST'} text2 = {'COLLECTION'}/> 
      </div> 

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'> 
        { 
        latestProducts.map((item, index) => (  
          <ProductItem key = {index} id = {item.id} image = {item.image} name = {item.name} price = {item.price} /> 
        )) 
      } 
      </div> 
      <center className = 'my-10'> 
      <Pagination  /> 
      </center> 
    </div> 
  )
}

export default Page2; 