import React from 'react'

const Table = () => {
  return (
    <table class="table-component">
        <thead className="bg-[#F5F5F5]">
            <tr>
            <th>ID</th>
            <th>Prescription</th>
            <th>Generic Name</th>
            <th>Brand Name</th>
            <th>Dosage Form</th>
            <th>Category</th>
            <th>Strength</th>
            <th>Cost Price</th>
            <th>Selling Price</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>01</td>
                <td>Code</td>
                <td>Amilodippine</td>
                <td>Novax</td>
                <td>Tablet</td>
                <td>Anti-hypertensive</td>
                <td>10mg</td>
                <td>N10,000</td>
                <td>N13,500</td>
            </tr>
        </tbody>
    </table>
  )
}

export default Table