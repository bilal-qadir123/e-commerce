

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; 

function Pagination() {
  const location = useLocation();
  const [selectedPage, setSelectedPage] = useState(() => {
    return location.pathname === '/' ? 1 : 2;
  });

  const handlePageChange = (pageNumber) => {
    setSelectedPage(pageNumber); 
  };

  const boxStyle = (pageNumber) => ({ 
    width: '40px',
    height: '40px',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center', 
    cursor: 'pointer',
    backgroundColor: selectedPage === pageNumber ? '#8A8A8A' : '#B0B0B0',
    color: '#fff',
    fontSize: '18px',
    marginRight: '5px', 
  });

  return ( 
    <div className='w-3/4 mb-10 flex justify-center'> 
      <Link to='/' onClick={() => handlePageChange(1)}> 
        <div style={boxStyle(1)}>
          1 
        </div> 
      </Link> 
      <Link to='/page2' onClick={() => handlePageChange(2)}> 
        <div style={boxStyle(2)}>
          2 
        </div> 
      </Link> 
    </div>
  );
}

export default Pagination;
 