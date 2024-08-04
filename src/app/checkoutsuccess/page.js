import React from 'react'
import SideLayout from '../components/SideLayout'

const CheckoutSuccess = () => {
  return (
    <SideLayout>
      <section className="py-3 px-5">
          <div>
            <h1 className="text-[32px] text-[#8E8E8E]">
                Checkout Success
            </h1>
          </div>

          <div className="flex justify-center items-center">
            <img src="success.png"/>
          </div>
          <p className="text-center">You Have successfully Confirmed the <br/> Prescription and Checkout</p>
          <div>
             <button className="w-full h-10 bg-[#0043FF] text-white rounded-3xl mt-9">Return HomePage</button>
          </div>
      </section>

    </SideLayout>
  )
}

export default CheckoutSuccess