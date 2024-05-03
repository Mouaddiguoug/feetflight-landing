import React from 'react'

function features() {
    return (
        <>
            <div id='features' className='w-full md:mt-52 md:py-0 py-20 flex justify-center items-center md:h-screen'>
                <div className='md:w-3/6 w-4/6 flex justify-center items-center'>
                    <img className='md:w-4/6 w-full' src='assets/feed_image.png' />
                </div>
                <div className='md:w-3/6 w-5/6 gap-7 flex-col flex justify-center items-start'>
                    <div className='md:w-20 w-12 flex rounded-lg md:rounded-2xl justify-center items-center bg-[#DF5938] h-5 md:h-10'>
                        <p className='text-sm'>Feed</p>
                    </div>
                    <h1 className='md:w-5/6 font-semibold w-full text-xl md:text-5xl'>We provide delivering content to you by the most interactive and intuitive ways possible.</h1>
                </div>
            </div>
            <div className='w-full px-2 flex justify-center items-center md:h-screen'>
                <img className='md:w-[73%] w-[95%]' src='assets/album_image.png' />
            </div>
            <div className='w-full md:mt-52 md:py-0 py-20 flex justify-center items-center md:h-screen'>
                
                <div className='md:w-3/6 w-5/6 gap-7 flex-col flex justify-center md:items-end items-start'>
                    <div className='md:w-20 self-start ml-6 md:ml-[16%] w-12 flex rounded-lg md:rounded-2xl justify-center items-center bg-[#DF5938] h-5 md:h-10'>
                        <p className='text-sm'>Chat</p>
                    </div>
                    <h1 className='md:w-5/6 ml-6 md:ml-0 font-semibold w-5/6 text-xl md:text-5xl'>We provide a smooth, intuitive and secure chat and tip system.</h1>
                </div>
                <div className='md:w-3/6 w-4/6 flex justify-center items-center'>
                    <img className='md:w-4/6 w-full' src='assets/chat_image.png' />
                </div>
            </div>
            <div className='w-full px-2 flex justify-center items-center md:h-screen'>
                <img className='md:w-[75%] w-[95%]' src='assets/tip_image.png' />
            </div>
            <div className='w-full md:mt-52 md:py-0 py-20 flex justify-center items-center md:h-screen'>
                <div className='md:w-3/6 w-4/6 flex justify-center items-center'>
                    <img className='md:w-4/6 w-full' src='assets/statistics_image.png' />
                </div>
                <div className='md:w-3/6 w-5/6 gap-7 flex-col flex justify-center items-start'>
                    <div className='md:w-20 w-20 flex rounded-lg md:rounded-2xl justify-center items-center bg-[#DF5938] h-5 md:h-10'>
                        <p className='text-sm'>Statistics</p>
                    </div>
                    <h1 className='md:w-5/6 font-semibold w-full text-xl md:text-5xl'>We provide the best creator experience.</h1>
                </div>
            </div>
            <div className='w-full px-2 flex justify-center items-center md:h-screen'>
                <img className='md:w-[73%] w-[95%]' src='assets/payout_account_image.png' />
            </div>
            <div className='w-full md:mt-52 md:py-0 py-20 flex justify-center items-center md:h-screen'>
                
                <div className='md:w-3/6 w-5/6 gap-7 flex-col flex justify-center md:items-end items-start'>
                    <div className='md:w-32 w-32 self-start ml-6 md:ml-[15%] flex rounded-lg md:rounded-2xl justify-center items-center bg-[#DF5938] h-5 md:h-10'>
                        <p className='text-sm'>Creating content</p>
                    </div>
                    <h1 className='md:w-5/6 ml-6 md:ml-0 font-semibold w-5/6 text-xl md:text-5xl'>Creating content made easy with feetflight.</h1>
                </div>
                <div className='md:w-3/6 w-4/6 flex justify-center items-center'>
                    <img className='md:w-4/6 w-full' src='assets/add_content_image.png' />
                </div>
            </div>
            <div className='w-full px-2 flex justify-center items-center md:h-screen'>
                <img className='md:w-[75%] w-[95%]' src='assets/add_content_media.png' />
            </div>
            <div className='w-full md:mt-52 md:py-0 py-20 flex justify-center items-center md:h-screen'>
            <img src='assets/color-sharp 2.png' className='absolute w-3/6 left-0 -z-10' />
                <div className='md:w-3/6 w-4/6 flex justify-start items-center'>
                    <img className='md:w-full w-full' src='assets/settings.png' />
                </div>
                <div className='md:w-3/6 w-5/6 gap-7 flex-col flex justify-center items-start'>
                    
                    <h1 className='md:w-5/6 w-[90%] font-semibold text-xl md:text-5xl'>Feetflight is the safest zone for feet content creators and feet enthousiasts.</h1>
                </div>
            </div>
        </>
    )
}

export default features
