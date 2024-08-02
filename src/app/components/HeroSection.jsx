import React from 'react'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <>
        <div className="flex items-center justify-around ">

            <div>
                <h2 className="text-[50px] leading-tight font-bold">Buy, Purchase And Get <br /> Drugs with Automatic <br /> <span className="text-[#0043FF]">Dosage Reminders</span></h2>
                <p className="font-bold my-6">PERSONAL INFORMATION // MEDICAL <br /> INFORMATION // PRESCRIPTION VERIFICATION</p>
                <div className="flex flex-col my-3 justify-normal gap-y-2 w-48">
                    <Link href="/" className="bg-[#0043FF] px-3 py-3 block text-center text-white rounded-3xl">Customer View</Link>
                    <Link href="/" className="bg-[#0043FF] px-3 py-3 text-center text-white rounded-3xl">Admin View</Link>
                </div>
            </div>

            <div className="relative">              
                <img src="img.png" alt="" className="w-[100%] max-w-[550px]"/>
                <div className="absolute">
                    <p>The number one service that renders quick healthcare in Nigeria</p>
                </div>
                <div className="absolute">
                    <p>You don't have to forget taking that medication because we're here to remind you</p>
                </div>
                <div className="w-[500px] h-[350px] bg-[#B0C5FF] rounded-2xl absolute -z-10 top-32 left-3">

                </div>
            </div>
        </div>

        <div className="flex justify-between  bg-[#0043FF] px-10">
            <div>
                <p className="text-[40px] text-white">100,000</p>
                <span className="text-[16px] text-white">Total Users</span>
            </div>

            <div>
                <p className="text-[40px] text-white">500</p>
                <span className="text-[16px] text-white">Listed Drugs</span>
            </div>

            <div>
                <p className="text-[40px] text-white">20%</p>
                <span className="text-[16px] text-white">Sales Increase</span>
            </div>
        </div>
    </>
  )
}

export default HeroSection