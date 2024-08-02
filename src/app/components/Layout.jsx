import React from 'react'
import Link from 'next/link'

const Layout = ({children}) => {
  return (
    <div className="flex flex-row ">
        {/* navigation */}
        <div>
           


        </div>
    {/* main body */}
        <main>
            {children}
        </main>
    </div>
  )
}

export default Layout