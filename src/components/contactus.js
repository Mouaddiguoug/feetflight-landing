import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoIosWarning } from "react-icons/io";
import axios from "axios";
import { MdOutlineSentimentSatisfied } from "react-icons/md";
import { useState } from "react";

function contactus() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [message, setMessage] = useState("");
    const [sent, setSent] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false)
    return (
        <div id="contact" className='w-full mb-52 flex md:flex-row flex-col justify-between h-screen items-center '>
            <div className='md:w-3/6 w-full flex flex-col gap-2 justify-between items-center'>
                <h1 className='md:text-5xl text-center text-3xl font-bold'>Contact us</h1>
                <p className='font-extralight text-lg text-center w-5/6 md:w-2/3'>Contact us on the form below if you have any questions for us!</p>
                <div className='flex gap-3 mt-10 justify-center w-full items-center flex-col'>
                    <h1 className='text-2xl font-semibold'>Email</h1>
                    <p className='font-extralight text-lg text-center w-2/3'>team.feetflight.app@gmail.com</p>
                </div>
                <div className='flex gap-3 mt-10 justify-center w-full items-center flex-col'>
                    <h1 className='text-2xl font-semibold'>Phone</h1>
                    <p className='font-extralight text-lg text-center w-2/3'>0615107414</p>
                </div>
                <div className='flex mt-[50%] md:mt-[10%] absolute gap-10 left-5 md:left-10 justify-center items-start flex-col'>
                    <a href="">
                        <FaInstagram size={20} />
                    </a>
                    <a href="#">
                        <FaFacebookF size={20} />
                    </a>
                    <a href="#">
                        <FaTwitter size={20} />
                    </a>
                </div>
            </div>
            <div className='md:w-3/6 w-full flex justify-center items-center h-screen md:h-full'>
                <div className='md:w-5/6 gap-5 w-[90%] px-10 py-10 flex justify-between items-center flex-col h-[80%] rounded-3xl bg-gradient-to-b from-[#262627] to-[#0E0E0E]'>
                    <h1 className="text-3xl font-semibold">Get in touch</h1>
                    {
                        isFormValid && <div className="flex w-5/5 gap-2 justify-center items-center">
                            <IoIosWarning color="red" />
                            <p className=" text-red-600">A field is required!</p>
                        </div>

                    }
                    {
                        sent && <div className="flex w-5/5 gap-2 justify-center items-center">
                            <MdOutlineSentimentSatisfied color="green" />
                            <p className=" text-green-600">Your message has been sent successfully!</p>
                        </div>
                    }
                    <input onChange={(e) => setName(e.target.value)} placeholder="Full Name" type="text" className="md:w-5/6 w-[90%] outline-none px-3 border-[1.5px] bg-transparent rounded-2xl h-14" />
                    <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="text" className="md:w-5/6 w-[90%] outline-none px-3 border-[1.5px] bg-transparent rounded-2xl h-14" />
                    <input onChange={(e) => setNumber(e.target.value)} placeholder="Number" type="text" className="md:w-5/6 w-[90%] outline-none px-3 border-[1.5px] bg-transparent rounded-2xl h-14" />
                    <textarea placeholder="Message" onChange={(e) => setMessage(e.target.value)} rows={3} className="md:w-5/6 w-[90%] outline-none px-3 border-[1.5px] bg-transparent rounded-2xl" />
                    <button onClick={() => {
                        if (!email || !message || !name) return setIsFormValid(true)
                        setIsFormValid(false)
                        axios.post("https://feetflight.onrender.com/users/contact", {
                            "name": name,
                            "email": email,
                            "number": number,
                            "message": message
                        })
                        setSent(true)
                    }} className="md:w-5/6 w-[90%] flex justify-center items-center h-14 bg-blue-600 rounded-2xl">Send</button>
                </div>
            </div>
        </div>
    )
}

export default contactus
