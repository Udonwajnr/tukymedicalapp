import React from 'react'

const TableLayout = ({children}) => {
  return (
    <div className="flex">
        <div className="top-0 left-0 h-screen max-[360px] bg-[#10172A] text-white px-5 py-5">
            <div className="flex flex-row items-center">
                <img src="icon.png" alt="" />
                <div className="flex-flex-col leading-3">
                    <h5 className="text-sm">Williams</h5>
                    <span className="text-xs">Manager</span>
                </div>
            </div>
        </div>
        
        <div className="h-screen flex-1">
            {children}
        </div>
    </div>
  )
}

export default TableLayout