import React from 'react'
import { useNavigate } from 'react-router-dom'

function Notfoundpage() {
    const navigate = useNavigate();
    const handeGoToHome=()=>{
  navigate('/')
    }
  return (
    <div className='text-center items-center  mt-48'>
        <h1 className='mt-12 text-center text-7xl text-red-500 '>
        Oops!
        </h1>
     <h1 className='text-4xl mt-12'>
         404 Page not found 
        
        </h1>
        <p className='w-[50rem] mt-12 m-auto text-center'>
         The page you're searching for seems to be off or not available in our <span className='text-blue-500 underline  cursor-pointer'><a href='/'>StreamingService.com</a></span>  . But don't worry, we've got our best trackers on the case. In the meantime, feel free to explore some of our other trails. Happy exploring!
        </p>
      <div className='mt-12 '>
        <button className='bg-gray-500  text-white p-3 rounded-sm hover:bg-green-400 hover:text-black'
        onClick={handeGoToHome}>
            Go to home page
        </button>
      </div>
    </div>
  )
}

export default Notfoundpage
