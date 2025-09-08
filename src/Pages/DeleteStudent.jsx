import React from 'react'
import BackTo from '../components/BackTo'
import { useNavigate, useParams } from 'react-router-dom';
import { getDatabase,ref,remove } from 'firebase/database';
import { app } from '../Firebase';

function DeleteStudent() {
    const navigate = useNavigate();
    const { id } = useParams();
    const deleteStudent = () => {
        const db = getDatabase(app);
        const studentRef = ref(db,'student/'+ id);
        remove(studentRef).then(() => {
            navigate('/student-list');
        }).catch((error) => {
            alert(error);
        })
    }
    return (
        <div className='p-4'>
            <BackTo />
            <h1 className='text-lg md:text-2xl md:text-center text-center font-bold mt-10 italic'>This action cannot be undone. If you press the button below the document will be permanently deleted.</h1>
            <div className='flex justify-center w-full max-w-680px mx-auto items-center mt-10'>
                <div className='flex flex-col bg-red-300 px-16 py-6 rounded-lg border-red-500'>
                    <h1 className='text-black text-lg md:text-2xl font-bold'>
                        Are you sure you want to delete this student?
                    </h1>
                    <div className='flex justify-center' onClick={() => {
                        navigate('/student-list');
                    }}>
                        <button className='bg-white text-black px-4 py-2 rounded-lg mt-4 hover:bg-gray-400 mr-4'>
                            Cancel
                        </button>
                        <button className='bg-red-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-red-600'
                        onClick={deleteStudent}
                        >
                            Yes, Delete Student
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteStudent
