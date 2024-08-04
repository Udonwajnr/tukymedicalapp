import React from 'react'
import SideLayout from '../components/SideLayout'
const CreateUser = () => {
  return (
    <SideLayout>
        <div className="py-3 px-5">
            <h1 className="text-[32px] text-[#8E8E8E]">Personal Information</h1>
            <div className="grid grid-cols-2 gap-3 mt-16">
                <div className="flex flex-col ">
                    <label>First Name</label>
                    <input className="h-12 rounded-3xl border focus:outline-[#0043FF] focus:bg-[#B8CAFC] px-3 bg-[#F5F5F5]" placeholder="John"/>
                </div>

                <div className="flex flex-col ">
                    <label>Last Name</label>
                    <input className="h-12 rounded-3xl border focus:outline-[#0043FF] focus:bg-[#B8CAFC] px-3 bg-[#F5F5F5]" placeholder="Doe"/>
                </div>

                <div className="flex flex-col">
                    <label>35</label>
                    <input  className="h-12 rounded-3xl border focus:outline-[#0043FF] focus:bg-[#B8CAFC] px-3 bg-[#F5F5F5]" placeholder="35Years"/>
                </div>

                <div className="flex flex-col">
                    <label>Phone Number</label>
                    <input className="h-12 rounded-3xl border focus:outline-[#0043FF] focus:bg-[#B8CAFC] px-3 bg-[#F5F5F5]" placeholder="08xxxxxxxxx"/>
                </div>

                <div className="flex flex-col col-span-2">
                    <label>Email</label>
                    <input className="h-12 rounded-3xl border focus:outline-[#0043FF] focus:bg-[#B8CAFC] px-3 bg-[#F5F5F5]" placeholder="John@gmail.com"/>
                </div>
            </div>

            <div>
                <button className="w-full h-10 bg-[#0043FF] text-white rounded-3xl mt-9">Next</button>
            </div>
        </div>
    </SideLayout>
  )
}

export default CreateUser