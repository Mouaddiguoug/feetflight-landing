import { useRouter } from "next/navigation"
import qrcode from "qrcode"
import { useEffect, useState } from "react";

function header() {
    const router = useRouter();
    const [src, setSrc] = useState("");
    useEffect(() => {
        qrcode.toDataURL("https://play.google.com/store/apps/details?id=app.feetflight.space").then(setSrc);
    })
    return (
        <>
            <img src='assets/color-sharp2 1.png' className='absolute -z-10' />
            <div className='w-full mt-24 md:mt-10 z-40 flex flex-col md:flex-row md:justify-between justify-center items-center h-screen'>
                <div className='flex flex-col justify-between md:items-start items-center gap-10 w-full md:w-3/6'>
                    <h1 className='text-5xl text-center md:text-left md:text-6xl font-bold md:ml-20'>Where Footography Takes Off!</h1>
                    <img src='assets/feet.png' className='w-full md:hidden block' />
                    <p className='md:text-lg text-sm text-center md:text-left px-10 md:px-0 font-thin md:mx-20'>Whether you're a feet enthusiast or you love admiring beautiful feet, our app has something for everyone. Explore an amazing collection of images, videos, and articles admiring the beauty and diversity of feet.</p>
                    <button onClick={() => router.push("https://play.google.com/store/apps/details?id=app.feetflight.space")} className='md:w-2/6 w-5/6 bg-blue-300 rounded-2xl md:hidden block py-3 md:mx-20'>Get it on playstore</button>
                    <div className="w-5/6 p-5 rounded-2xl hidden md:flex bg-gray-900 justify-between ml-20 items-center">
                        <img src={src} className="rounded-[10%] w-[20%]" />
                        <div className="flex pl-4 flex-col justify-center gap-3 items-start">
                            <h1 className="text-xl font-bold">Download the app</h1>
                            <p>To download the app, scan the code using your phone's camera</p>
                        </div>
                    </div>
                </div>
                <div className='w-3/6 md:flex hidden justify-center items-center'>
                    <img src='assets/feet.png' className='w-[50%] absolute pt-10' />
                </div>
            </div>
        </>
    )
}

export default header

