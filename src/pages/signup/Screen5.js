import React, { useEffect } from 'react';
import { FaLock } from "react-icons/fa";
import { IoIosArrowForward } from 'react-icons/io';
import JSConfetti from 'js-confetti'; // Import JSConfetti class
import ScreenNav from './ScreenNav';

function Screen5() {
  let duration = 15 * 1000;
  let animationEnd = Date.now() + duration;
  let defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  useEffect(() => {
    let interval = setInterval(function() {
      let timeLeft = animationEnd - Date.now();
  
      if (timeLeft <= 0) {
        clearInterval(interval);
      }
  
      let particleCount = 50 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
      // confetti.addConfetti is moved inside handlePaymentClick
    }, 250);

    return () => clearInterval(interval); // Cleanup function
  }, []);

  const handlePaymentClick = (paymentMethod) => {
    // Instantiate JSConfetti class
    const confetti = new JSConfetti();

    // Trigger confetti effect
    confetti.addConfetti({
      ...defaults,
      particleCount: 100,
      origin: { x: 0.5, y: 0.5 } // Center of the screen
    });

    // Add logic here to handle payment method selection
    console.log(`Selected payment method: ${paymentMethod}`);
  };

  return (
    <div>
      <ScreenNav />
      <FaLock size={32} color='red' className='w-64 mt-16 m-auto items-center' />

      <p className=' mt-4 text-center'>STEP 3 OF 3</p>
      <h1 className='mt-12 font-bold text-4xl text-center'>Choose how to pay </h1>
      <h3 className='text-center mt-8'>Your payment is encrypted and you can change how <br/> you pay anytime.</h3>
      <h1 className='text-center mt-8'>Secure for peace of mind.<br/> Cancel easily online</h1>

      <button onClick={() => handlePaymentClick("Stripe")} className="hover:bg-gray-200 border text-black m-auto mt-12  py-4 flex  justify-between items-center gap-12   px-32  font-bold rounded-sm">
        Stripe <img className="w-12" src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png' alt='stripe' /> <IoIosArrowForward />
      </button>
      <button onClick={() => handlePaymentClick("E-sewa")} className="hover:bg-gray-200 border text-black m-auto mt-12  py-4 flex  justify-between items-center gap-12   px-32  font-bold rounded-sm">
        E-sewa <img className="w-16 " src='https://esewa.com.np/common/images/esewa_logo.png' alt='esewa' /> <IoIosArrowForward className='-ml-8' />
      </button>
      
     
    </div>
  );
}

export default Screen5;
