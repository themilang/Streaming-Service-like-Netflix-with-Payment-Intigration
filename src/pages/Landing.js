import React, { useState } from "react";
import logo from "../assets/logo.png";
import { IoIosArrowForward } from "react-icons/io";
import Login from "./Login";
import { useNavigate } from "react-router-dom";

function Landing() {


const [email,setEmail]=useState();
const [isValid , setIsValid]=useState(false);


const navigate =useNavigate();
   const handleEmailChange=(event)=>{
    setEmail(event.target.value)

    console.log(email)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   setIsValid(emailRegex.test(event.target.value))
   }

   const handleSubmit =()=>{
        console.log(email)
        localStorage.setItem('email', email);
        navigate(`/registration?`)
        {<Login email={email}/>}
   }
      
  return (
    <div
      style={{
        backgroundImage: ` linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)), url("https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY-1200-80.jpg.webp")`,
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <div className=" ">
        <div className=" z-10 inset-0  sticky top-0">
          <div className={`h-16 flex justify-between`}>
            <div className="ml-8 ">
              <img className="w-48 mt-10 ml-16 " src={logo} alt="flix"></img>
            </div>
            <button className="  mt-16 mr-28 2 h-8 text-center px-4 rounded-lg  bg-red-600  text-white  hover:bg-red-800 cursor-pointer  hover:text-gray-200 font-bold items-center">
              Sign In
            </button>
          </div>
        </div>
      </div>

      <h1 className=" mt-[15rem] text-white text-5xl text-center m-auto font-extrabold ">
        Unlimited movies, TV shows, and more
      </h1>
      <h3 className="  mt-8 text-white text-3xl text-center m-auto font-semibold">
        Watch anywhere. Cancel anytime.
      </h3>
      <p className=" mt-8 text-white text-xl text-center m-auto font-medium">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
<div className="flex gap-2 ml-auto justify-center mt-10">

<input
  className={`pl-2 backdrop-brightness-50 border ${
    email ? (isValid ? 'border-green-400' : 'border-red-400') : 'border-gray-400'
  } rounded-sm w-96 bg-transparent text-white items-start`}
  type="email"
  placeholder="Email address"
  value={email}
  onChange={handleEmailChange}
/>

      <button  type="submit" onClick={handleSubmit} className="bg-red-600   py-4 flex items-center gap-3 px-3 text-white font-bold rounded-sm">Get Started <IoIosArrowForward />

</button>
</div>


    </div>
  );
}

export default Landing;
