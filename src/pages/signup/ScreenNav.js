import React from 'react'
import logo from '../../assets/logo.png'
function ScreenNav({rightSide}) {
  return (
    <>
    
    
  
    <div>
       <div className=" ">
        <div className=" z-10 inset-0  sticky top-0">
          <div className={`h-16 flex justify-between`}>
            <div className="ml-8 ">
              <img className="w-48  ml-16 " src={logo} alt="flix"></img>
            </div>
            <button className="  mt-10 mr-28 2 h-8 text-center px-4 rounded-lg  text-xl text-black   cursor-pointer  hover:text-red-800 font-bold items-center">
              {rightSide}
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className='border mt-12'>
        
    </div>
    </>
  )
}

export default ScreenNav
