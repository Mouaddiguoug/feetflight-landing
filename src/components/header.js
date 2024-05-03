import { useRouter } from "next/navigation"

function header() {
    const router = useRouter();
    return (
        <>
            <img src='assets/color-sharp2 1.png' className='absolute -z-10' />
            <div className='w-full mt-10 z-40 flex flex-col md:flex-row md:justify-between justify-center items-center h-screen'>
                <div className='flex flex-col justify-between md:items-start items-center gap-10 w-full md:w-3/6'>
                    <h1 className='text-5xl text-center md:text-left md:text-6xl font-bold md:ml-20'>Where Footography Takes Off!</h1>
                    <img src='assets/feet.png' className='w-full md:hidden block' />
                    <p className='md:text-lg text-sm text-center md:text-left px-10 md:px-0 font-thin md:mx-20'>tep into a world of feet appreciation with our dedicated app! Whether you're a foot enthusiast, you love admiring beautifully adorned feet, our app has something for everyone. Explore a curated collection of images, videos, and articles celebrating the beauty and diversity of feet.</p>
                    <button onClick={() => router.push("/discover")} className='md:w-2/6 w-5/6 bg-blue-300 rounded-2xl py-3 md:mx-20'>Get started</button>
                </div>
                <div className='w-3/6 md:flex hidden justify-center items-center'>
                    <img src='assets/feet.png' className='w-[50%] absolute pt-10' />
                </div>
            </div>
        </>
    )
}

export default header
