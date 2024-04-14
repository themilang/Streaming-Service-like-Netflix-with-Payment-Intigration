import React from 'react'
import devices from '../../assets/tabs.svg'
import ScreenNav from './ScreenNav'
import { useNavigate } from 'react-router-dom';
function Screen1(props) {
  const navigate = useNavigate();
  const handleNext=()=>{
    navigate('/signup/regform')

  }
  return (
    <div>
    <ScreenNav rightSide='Sign In'/>

     <img  className='w-64 mt-32 m-auto items-center ' src={devices}></img>
      <p className=' mt-4 text-center'>STEP 1 OF 3
</p>
<h1 className='mt-12 font-bold text-4xl text-center'>Finish setting up your <br/> account</h1>
<h3 className='text-center mt-8'>Netflix is personalized for you.<br/> Create a password to watch on any <br/> device at any time.</h3>



<button onClick={handleNext} className='bg-red-600 py-4   m-auto mt-12 rounded-lg text-white items-center flex justify-around px-28'>
  Next
</button>
    </div>
  )
}

export default Screen1
