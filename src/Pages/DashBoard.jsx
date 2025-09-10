import React from 'react'
import { Link } from 'react-router-dom'
import StudentList from './StudentList'

function DashBoard() {
    return (
        <div className='flex flex-row'>
            <div className='w-2/5 md:w-1/5 bg-gray-300 flex flex-col items-center'>
                <h1 className='text-2xl font-bold bg-white w-full text-center p-4'>Side Nav</h1>
                <Link to='/add-student'
                className='font-semibold w-full flex justify-center border-b p-4'
                >
                Add Student
                </Link>
                <Link to='/add-faculty' className='font-semibold w-full flex justify-center border-b p-4'>
                Add Faculty
                </Link>
                <Link to='/faculty-list' className='font-semibold w-full flex justify-center border-b p-4'>
                Faculty List
                </Link>
            </div>
            <div className='w-full bg-gray-100 flex flex-col items-center'>
                <h1 className='text-2xl font-bold bg-white w-full text-center p-4 border'>Student-List</h1>
                <StudentList/>
            </div>
        </div>
    )
}

export default DashBoard
