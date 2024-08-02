import React from 'react'

const TableLayout = ({children}) => {
  return (
    <div>
        <div className="absolute top-0 h-screen w-52 bg-[#10172A]">

        </div>
        
        <div className="h-screen ">
            {children}
        </div>
    </div>
  )
}

export default TableLayout