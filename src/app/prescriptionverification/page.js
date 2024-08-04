import React from 'react'
import SideLayout from '../components/SideLayout'
const PrescriptionVerification = () => {
  return (
    <SideLayout>
        <div className="py-3 px-5">
                <h1 className="text-[32px] text-[#8E8E8E]">
                Medical Information
                </h1>
                <div className="bg-[#787676] mt-6 rounded-3xl py-5 px-3">
                    <h2 className="text-[20px] text-[#FAFAFA]">Price Details</h2>
                    <div className="mt-4 flex flex-col gap-y-4">
                        <div className="flex justify-between">
                            <h4 className="text-white">Amount</h4>
                            <h4 className="text-white">14,450 Naira</h4>                   
                        </div>

                        <div className="flex justify-between">
                            <h4 className="text-white">Transaction Type</h4>
                            <h4 className="text-white">Bank Transfer</h4>                   
                        </div>

                        <div className="flex justify-between">
                            <h4 className="text-[#FAFAFA]">Transaction Date</h4>
                            <h4 className="text-[#FAFAFA]">24th, June 2024</h4>                   
                        </div>
                    </div>

                </div>

                <div className="bg-[#787676] mt-6 rounded-3xl py-5 px-3">
                    <h2 className="text-[20px] text-[#FAFAFA]">Medication Details</h2>
                    <div className="mt-4 flex flex-col gap-y-4">
                        <div className="flex justify-between">
                            <h4 className="text-white">Metroproclamide</h4>
                            <h4 className="text-white">10mg / 6 hourly / 4 days</h4>                   
                        </div>

                        <div className="flex justify-between">
                            <h4 className="text-white">Aspirin</h4>
                            <h4 className="text-white">10mg / 6 hourly / 4 days</h4>                   
                        </div>

                        <div className="flex justify-between">
                            <h4 className="text-white">Aspirin</h4>
                            <h4 className="text-white">10mg / 6 hourly / 4 days</h4>                   
                        </div>

                        <div className="flex justify-between">
                            <h4 className="text-white">Aspirin</h4>
                            <h4 className="text-white">10mg / 6 hourly / 4 days</h4>                   
                        </div>
                    </div>      
                </div>

                <div>
                    <button className="w-full h-10 bg-[#0043FF] text-white rounded-3xl mt-9">Checkout</button>
                </div>
        </div>
    </SideLayout>
  )
}

export default PrescriptionVerification