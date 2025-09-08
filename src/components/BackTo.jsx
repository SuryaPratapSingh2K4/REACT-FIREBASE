import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

function BackTo() {
    return (
        <div className='flex'>
            <Link to={'/'}
            className='text-black rounded-full py-2 px-4 text-lg hover:bg-white'
            >
                <FaArrowLeft className='inline-block mr-2 mb-1' />
                Back
            </Link>
        </div>
    )
}

export default BackTo
