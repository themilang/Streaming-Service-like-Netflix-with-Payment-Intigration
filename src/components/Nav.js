import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import profile from "../assets/account.webp";
function Nav() {
  const [shownav,setShownav]=useState(false);
  const transitionNav=()=>{
    if (window.scrollY>60){
      setShownav(true)
    }
    else {
      setShownav(false)
    }
  }

  useEffect(()=>{
   window.addEventListener("scroll",transitionNav);
   return()=> window.removeEventListener('scroll',transitionNav);

  },[]);

  return (
    <div className=" z-10 inset-0  sticky top-0">
      <div className={`  ${shownav && "  animate-fade bg-black"} h-16 flex justify-between`}>
        <div className="ml-8 ">
          <img className="w-32 -mt-2 " src={logo} alt="flix"></img>
        </div>
        <img className="mr-8 w-8 h-8 mt-3 " src={profile} alt="profile"></img>
      </div>
    </div>
  );
}

export default Nav;
