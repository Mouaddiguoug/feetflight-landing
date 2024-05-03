import React from 'react'

function howItWorks() {
  return (
    <div id='how_it_works' className='w-full flex justify-center items-center h-screen'>
    
      <div className='w-[85%] gap-5 md:gap-7 bg-[#12171D]/60 backdrop-blur-2xl flex flex-col justify-center items-center rounded-3xl h-[95%] md:h-[70%]'>
      <img src='assets/color-sharp 2.png' className='w-2/6 absolute left-0 -z-10' />
      <img src='assets/color-sharp2 1.png' className='w-2/6 absolute right-0 -z-10' />
        <h1 className='md:text-4xl text-xl text-[#5A5D61] font-bold text-center'>Smooth untill you create <br /><span className='text-white text-lg md:text-5xl'>your first collection</span></h1>
        <img src='assets/roadmap.png' className='w-[90%] md:block hidden' />
        <img src='assets/roadmap_vertical.png' className='w-[90%] md:hidden block' />
      </div>
    </div>
  )
}

export default howItWorks
