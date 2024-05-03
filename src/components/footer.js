import React from 'react'

function footer() {
    return (
        <div className='w-full h-full bg-black z-20'>
            <div className='w-full flex py-3 flex-col md:flex-row justify-center items-center gap-10'>
                <a href='#'>Home</a>
                <a href='#how_it_works'>How it works</a>
                <a href='#features'>Features</a>
                <a href='#contact'>Contact us</a>
                <a href='https://feetflight.netlify.app'>Privacy policy</a>
            </div>
            <div className='w-full flex justify-between bg-[#0F0F0F] h-full px-20 items-center gap-6'>
                <img src='assets/logo.png' className='w-16 py-10' />
                <p className='md:text-xls text-xls'>Created by dmthedev</p>
            </div>
        </div>
    )
}

export default footer
