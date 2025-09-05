import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div className='text-center py-5 font-bold text-4xl pt-[200px]'>
            <p className='font-bold text-customRed'>404 Error</p>
            <p>Page Not Found</p>

            <Link to='/'>
                <button className='bg-customRed text-white rounded-full py-2 px-4 text-lg mt-4'>Visit DashBoard</button>
            </Link>
        </div>
    )
}

export default NotFound
