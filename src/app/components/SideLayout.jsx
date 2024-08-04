"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const SideLayout = ({children}) => {
    const pathname = usePathname()
  return (
    <section className="flex ">
        <div className="bg-[#10172A] h-screen w-72 flex flex-col justify-center sticky top-0 px-2">
            <div>
                <h2 className="text-white text-[30px]">
                    Requested Access to get Started
                </h2>
                <p className="text-white mt-3">This will take a few Minutes</p>
            </div>

            <div className="mt-16">
                <div >
                    <label className="container flex flex-row items-center gap-x-7">
                        
                        <div className="w-5 h-5 rounded-full bg-green-500 flex justify-center items-center overflow-hidden border-2 border-[#8E8E8E]">
                            <input type="checkbox" className='w-full h-full border-none'/>
                        </div>
                        <span className="checkmark text-white">Personal Information</span>
                    </label>
                    {/* Vertical rule */}
                        <div className="flex justify-between px-2">
                            <div className="border border-[#D9D9D9] w-[2px] h-8 ">
                            </div>

                            <div></div>
                        </div>
                </div>

                <div >
                    <label className="container flex flex-row items-center gap-x-7">
                        <div className="w-5 h-5 rounded-full bg-green-500 flex justify-center items-center overflow-hidden border-2 border-[#8E8E8E]">
                            <input type="checkbox" className='w-full h-full'/>
                        </div>
                        <span className="checkmark text-white">Medication Information</span>
                    </label>
                    {/* Vertical rule */}
                        <div className="flex justify-between px-2">
                            <div className="border border-[#D9D9D9] w-[2px] h-8 ">
                            </div>

                            <div></div>
                        </div>
                </div>

                <div >
                    <label className="container flex flex-row items-center gap-x-7">
                        <div className="w-5 h-5 rounded-full bg-green-500 flex justify-center items-center overflow-hidden border-2 border-[#8E8E8E]">
                            <input type="checkbox" className='w-full h-full'/>
                        </div>
                        <span className="checkmark text-white">Prescription Verification</span>
                    </label>
                    {/* Vertical rule */}
                        <div className="flex justify-between px-2">
                            <div className="border border-[#D9D9D9] w-[2px] h-8 ">
                            </div>

                            <div></div>
                        </div>
                </div>

                <div >
                    <label className="container flex flex-row items-center gap-x-7">
                        <div className="w-5 h-5 rounded-full bg-green-500 flex justify-center items-center overflow-hidden border-2 border-[#8E8E8E]">
                            <input type="checkbox" className='w-full h-full'/>
                        </div>
                        <span className="checkmark text-white">Checkout SuccessPage</span>
                    </label>
                </div>

            </div>
        </div>

        <div className="flex-1">
            {children}
        </div>
    </section>
  )
}

export default SideLayout