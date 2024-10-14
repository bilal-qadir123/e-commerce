

import { useCallback, useContext, useEffect, useState } from "react"; 
import { ShopContext } from "../context/ShopContext"; 
import { assets } from "../assets/frontend_assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

function Collection() { 
  const { products, search, showSearch } = useContext(ShopContext); 
  const [showFilter, setShowFilter] = useState(false); 
  const [filterProducts, setFilterProducts] = useState([]); 
  const [category, setCategory] = useState([]); 
  const [subCategory, setSubCategory] = useState([]); 
  const [sortOption, setSortOption] = useState(""); 

  const toggleCategory = (event) => { 
    if (category.includes(event.target.value)) { 
      setCategory(prev => prev.filter(item => item !== event.target.value)); 
    } else { 
      setCategory(prev => [...prev, event.target.value]); 
    }
  };

  const toggleSubCategory = (event) => { 
    if (subCategory.includes(event.target.value)) { 
      setSubCategory(prev => prev.filter(item => item !== event.target.value)); 
    } else { 
      setSubCategory(prev => [...prev, event.target.value]); 
    }
  };

  const applyFilter = useCallback(() => { 
    let productsCopy = products.slice(); 

    if (showSearch && search) { 
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase())); 
    } 
    
    if (category.length > 0) { 
      productsCopy = productsCopy.filter(item => category.includes(item.category)); 
    } 

    if (subCategory.length > 0) { 
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory)); 
    } 
    
    if (sortOption === "low-high") {
      productsCopy.sort((a, b) => a.price - b.price);
    } else if (sortOption === "high-low") {
      productsCopy.sort((a, b) => b.price - a.price);
    } 

    setFilterProducts(productsCopy); 
  }, [products, category, subCategory, sortOption, showSearch, search]); 

  useEffect(() => { 
    applyFilter(); 
  }, [ applyFilter ]); 
  
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t"> 
      <div className="min-w-60"> 
        <p onClick={() => setShowFilter(!showFilter)} className="my-2 text-xl flex items-center cursor-pointer gap-2"> FILTERS </p> 
        <img className={`h-3 sm:hidden cursor-pointer ${showFilter ? "rotate-90" : ""}`} src={assets.dropdown_icon} alt="dropdown_icon" />
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}> 
          <p className="mb-3 text-sm font-medium"> CATEGORIES </p> 
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700"> 
            <p className="flex gap-2"> 
              <input className="w-3" type="checkbox" value={"Men"} onChange={toggleCategory} /> Men
            </p> 
            <p className="flex gap-2"> 
              <input className="w-3" type="checkbox" value={"Women"} onChange={toggleCategory} /> Women
            </p> 
            <p className="flex gap-2"> 
              <input className="w-3" type="checkbox" value={"Kids"} onChange={toggleCategory} /> Kids
            </p> 
          </div> 
        </div> 
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}> 
          <p className="mb-3 text-sm font-medium"> TYPE </p> 
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700"> 
            <p className="flex gap-2"> 
              <input className="w-3" type="checkbox" value={"Topwear"} onChange={toggleSubCategory} /> Topwear
            </p> 
            <p className="flex gap-2"> 
              <input className="w-3" type="checkbox" value={"Bottomwear"} onChange={toggleSubCategory} /> Bottomwear
            </p> 
            <p className="flex gap-2"> 
              <input className="w-3" type="checkbox" value={"Winterwear"} onChange={toggleSubCategory} /> Winterwear
            </p> 
          </div> 
        </div> 
      </div> 
  
      <div className="flex-1"> 
        <div className="flex justify-between text-base sm:text-2xl mb-4"> 
          <Title text1={'ALL'} text2={'COLLECTIONS'} /> 
          <select 
            className="border-2 border-gray-300 text-sm px-2"
            value={sortOption} 
            onChange={(e) => setSortOption(e.target.value)} 
          > 
            <option value="relevant"> Sort by: Relevant </option> 
            <option value="low-high"> Sort by: Low to High </option> 
            <option value="high-low"> Sort by: High to Low </option>
          </select>
        </div> 
        
        {filterProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6"> 
            {filterProducts.map((item) =>( 
              <ProductItem key={item._id} id={item._id} image={item.image} name={item.name} price={item.price} /> 
            ))} 
          </div>
        ) : (
          <h1 className="text-center text-lg mt-10">No items found</h1>
        )}
      </div> 
    </div>
  );
 } 

export default Collection;
 