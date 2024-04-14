import React from 'react';
import ScreenNav from './ScreenNav';
import { TiTick } from "react-icons/ti";
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Screen3() {
  const navigate=useNavigate();
  const handleNext=()=>{
    navigate('/signup/plansform')

  }
  return (
    <div>
      <ScreenNav rightSide='Sign Out'/>

      <div className='w-12 items-center flex m-auto'>
        <svg  xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xmlSpace="preserve">
          <defs></defs>
          <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
            <path d="M 60.879 31.299 c -6.173 5.123 -11.7 10.614 -16.569 16.37 h -0.021 h -0.001 c -2.531 -4.833 -5.459 -9.591 -8.752 -14.248 l -14.077 4.832 c 6.182 6.566 11.571 13.473 16.011 20.67 l 6.243 10.118 l 4.665 -9.973 c 4.161 -8.895 9.903 -17.532 17.283 -25.655 c 7.361 -8.13 13.293 -13.679 23.373 -20.676 C 77.638 18.82 70.1 23.623 60.879 31.299 z" style={{fill: 'rgb(242,0,0)', strokeLinecap: 'round'}} transform="matrix(1 0 0 1 0 0)" />
            <path d="M 76.876 29.21 c 2.368 4.761 3.708 10.121 3.708 15.79 C 80.584 64.62 64.62 80.584 45 80.584 S 9.416 64.62 9.416 45 S 25.379 9.416 45 9.416 c 9.278 0 17.734 3.572 24.075 9.409 c 2.586 -1.794 5.273 -3.557 8.057 -5.287 C 68.958 5.192 57.576 0 45 0 C 20.187 0 0 20.187 0 45 s 20.187 45 45 45 s 45 -20.188 45 -45 c 0 -8.039 -2.129 -15.586 -5.838 -22.125 C 81.592 24.964 79.173 27.079 76.876 29.21 z" style={{fill: 'rgb(242,0,0)', strokeLinecap: 'round'}} transform="matrix(1 0 0 1 0 0)" />
          </g>
        </svg>
      </div>
      
      <div>
        <p className='text-center text-sm -mt-16'>STEP 2 OF 3</p>
        <h1 className='text-center text-3xl font-bold'>Choose your plan.</h1>
      </div>

      <div className='flex mt-12 justify-center items-center'>
        <div className='flex flex-col text-center items-start gap-4'>
          <div className='flex items-center gap-4'>
            <TiTick color='red' size={32} />
            <h1>No commitments, cancel anytime.</h1>
          </div>
          <div className='flex items-center gap-4'>
            <TiTick color='red' size={32} />
            <h1>Everything on Netflix for one low price.</h1>
          </div>
          <div className='flex items-center gap-4'>
            <TiTick color='red' size={32} />
            <h1>No ads and no extra fees. Ever.</h1>
          </div>
        </div>
      </div>


      <div className='flex m-auto justify-around '>
      <Button
                  type="submit"
               className=''
               onClick={handleNext}
                  variant="contained"
                  sx={{ mt: 3, mb: 2,width: '200px' }}
                  style={{ backgroundColor: "red" }}
                >
                  Next
                </Button>
      </div>
     
    </div>
  )
}

export default Screen3;
