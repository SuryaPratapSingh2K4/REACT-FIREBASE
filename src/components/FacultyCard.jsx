import React from 'react'
import { Link } from 'react-router-dom'

function FacultyCard({fdata}) {
    return (
        <div className='cursor-pointer border p-4 mb-4 rounded-lg shadow-lg bg-white'>
            <h1 className='font-bold'>Faculty Admin No : <span className='font-normal'>{fdata.FacultyAdminNo}</span></h1>
            <h1 className='font-bold'>Faculty Name : <span className='font-normal'>{fdata.FacultyName}</span></h1>
            <h1 className='font-bold'>Faculty Email : <span className='font-normal'>{fdata.Facultyemail}</span></h1>
            <h1 className='font-bold'>Faculty Age : <span className='font-normal'>{fdata.FacultyAge}</span></h1>
            {/* <img src={values.imageURL} alt={values.studentName} className='w-32 h-32 object-cover mt-2 rounded-full'/> */}
            <div className='flex gap-2'>
                <Link to={`/delete-faculty/${fdata.id}`}
                    className='text-black rounded-full py-1 px-4 text-lg hover:bg-red-500 hover:text-white border border-red-500 mt-4'
                >
                    Delete
                </Link>


                {/* <button className='text-black rounded-full py-1 px-4 text-lg hover:bg-blue-500 hover:text-white border border-blue-500 mt-4'
                    onClick={() => { navigate(`/edit-student/${items}`, { state: [items, values] }) }}
                >
                    Edit
                </button> */}

            </div>
        </div>
    )
}

export default FacultyCard
