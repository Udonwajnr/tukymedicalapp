import React from 'react'
import Link from 'next/link'

const Navigation = () => {
  return (
    <header className=" py-3 ">
        <nav>
            <ul className="flex justify-center gap-x-4">
                <li>
                    <Link href="/" className="font-bold">Personal Information</Link>
                </li>

                <li>
                    <Link href="/" className="font-bold">Medical Information</Link>
                </li>

                <li>
                    <Link href="/" className="font-bold">Prescription Verification</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Navigation