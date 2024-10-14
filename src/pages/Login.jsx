

import React, { useState } from 'react';

function Login() { 
  const [currentState, setCurrentState] = useState('Sign Up'); 

  const onSubmitHandler = (event) => {
    event.preventDefault(); 
  } 

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4"> 
      <div className="inline-flex items-center gap-2 mb-2 mt-10"> 
        <p className="prata-regular text-3xl">{currentState}</p> 
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div> 
      
      

      {currentState === "Login" ? ( 
        <>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-800"
            placeholder="Name"
          /> 
          <input
            type="password"
            className="w-full px-3 py-2 border border-gray-800"
            placeholder="Password"
          /> 
          <div className='w-full flex justify-between text-sm mt-[-8px]'> 
            <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer hover:underline'> 
              Forgot Your Password? 
            </p> 
            <p  onClick={() => setCurrentState('Sign Up')} className='cursor-pointer hover:underline'> 
              Create New Account 
            </p> 
            
          </div> 
        </>
      ) : ( 
        <> 
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-800"
            placeholder="Name"
          />
          <input
            type="email"
            className="w-full px-3 py-2 border border-gray-800"
            placeholder="Email"
          />
          <input
            type="password"
            className="w-full px-3 py-2 border border-gray-800"
            placeholder="Password"
          /> 
          <div className='w-full flex justify-center text-sm mt-[-8px]'> 
            <p onClick={() => setCurrentState('Login')} className='cursor-pointer hover:underline'> 
              Already Have an Account? 
            </p> 
            
          </div> 
        </>
      )}

      <button 
        type="button"
        className="bg-black text-white text-sm mt-5 px-8 py-3 active:hover:bg-gray-600" 
        onClick={() => setCurrentState(currentState === 'Login' ? 'Sign Up' : 'Login')}
      >
        Switch to {currentState === 'Login' ? 'Sign Up' : 'Login'}
      </button> 
    </form>
  );
 } 

export default Login;
 