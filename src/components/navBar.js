"use client"
import React, { useDeferredValue, useEffect, useState } from "react"
import { useRouter } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";

function navBar() {
  const [isToggled, setIsToggeled] = useState(false);
  const router = useRouter();
  return (
    <div className={`w-full px-20 fixed z-50 md:h-auto justify-between backdrop-blur-3xl items-center bg-black/60 flex-col md:flex-row flex ${isToggled ? "h-screen" : "md:h-20"} `}>
      <div className={`md:w-2/6 w-full justify-between ${isToggled ? "flex" : "md:flex hidden"}`}>
        <img className='md:w-1/6 md:py-3 w-1/6' src="assets/logo.png" onClick={() => router.push("/")} />
        <div className='md:hidden block py-2'>
          <RxHamburgerMenu onClick={() => setIsToggeled(!isToggled)} size={30} />
        </div>
      </div>
      <div className={`md:w-[95%] gap-x-24 w-full h-full font-semibold text-2xl px-8 md:px-0 md:text-lg flex-col md:flex-row gap-y-6 md:justify-start justify-center ${isToggled ? "flex" : "md:flex hidden"}`}>
        <a href='#'>Home</a>
        <a href='#how_it_works'>How it works</a>
        <a href='#features'>Features</a>
        <a href='#contact'>Contact us</a>
      </div>
      <div className={`md:hidden justify-between w-full py-2 ${isToggled ? "hidden" : "flex"}`}>
        <img className='w-1/6' src="assets/logo.png" onClick={() => router.push("/")} />

        <RxHamburgerMenu onClick={() => setIsToggeled(!isToggled)} size={30} />
      </div>
    </div>
  )
}

export default navBar
