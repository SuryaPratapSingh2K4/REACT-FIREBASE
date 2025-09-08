import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Card({ items, values }) {
    const navigate = useNavigate();
    return (
        <div key={items} className='cursor-pointer border p-4 mb-4 rounded-lg shadow-lg bg-white'>
            <h1 className='font-bold'>Student Roll No : <span className='font-normal'>{values.studentRollNo}</span></h1>
            <h1 className='font-bold'>Student Name : <span className='font-normal'>{values.studentName}</span></h1>
            <h1 className='font-bold'>Student Email : <span className='font-normal'>{values.studentEmail}</span></h1>
            <h1 className='font-bold'>Student Age : <span className='font-normal'>{values.studentAge}</span></h1>
            <div className='flex gap-2'>
                <Link to={`/delete-student/${items}`}
                    className='text-black rounded-full py-1 px-4 text-lg hover:bg-red-500 hover:text-white border border-red-500 mt-4'
                >
                    Delete
                </Link>


                <button className='text-black rounded-full py-1 px-4 text-lg hover:bg-blue-500 hover:text-white border border-blue-500 mt-4'
                    onClick={() => { navigate(`/edit-student/${items}`, { state: [items, values] }) }}
                >
                    Edit
                </button>

            </div>
        </div>
    )
}

export default Card
