import React from 'react'
import TableLayout from '../components/TableLayout'
import Table from '../components/Table'

const DrugTable = () => {
  return (
    <TableLayout>
        <div className="py-3 border-b-2 border-b-[#E0DDDD] w-full lg:px-1 px-4"> 
            <h1 className="text-[28px] px-5">DrugTable</h1>
            {/* <hr className="border border-[#E0DDDD]"/> */}
        </div>
        <div className=" mt-6 rounded-3xl border-4 overflow-hidden">
            <Table/>
       </div>
    </TableLayout>
  )
}

export default DrugTable