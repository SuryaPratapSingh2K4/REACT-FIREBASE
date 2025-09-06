import React from 'react'

function Card({items,values}) {
    return (
        <div key={items} className='border p-4 mb-4 rounded-lg shadow-lg bg-white'>
            <h1 className='font-bold'>Student Roll No : <span className='font-normal'>{values.studentRollNo}</span></h1>
            <h1 className='font-bold'>Student Name : <span className='font-normal'>{values.studentName}</span></h1>
            <h1 className='font-bold'>Student Email : <span className='font-normal'>{values.studentEmail}</span></h1>
            <h1 className='font-bold'>Student Age : <span className='font-normal'>{values.studentAge}</span></h1>

        </div>
    )
}

export default Card
