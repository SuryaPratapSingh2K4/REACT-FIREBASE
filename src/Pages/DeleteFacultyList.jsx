import { deleteDoc, doc, getFirestore } from 'firebase/firestore';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { app } from '../Firebase';

function DeleteFacultyList() {
    const navigate = useNavigate();
    const { id } = useParams();   // ✅ get faculty id from URL params

    const deleteFaculty = async () => {
        const db = getFirestore(app);
        const docRef = doc(db, 'Faculty', id);  // ✅ use id here
        try {
            await deleteDoc(docRef);
            navigate("/faculty-list");
        } catch (error) {
            console.log(error);
            alert("Error deleting faculty: " + error.message);
        }
    };

    return (
        <div className='p-4'>
            <h1 className='text-lg md:text-2xl md:text-center text-center font-bold mt-10 italic'>
                This action cannot be undone. If you press the button below the document will be permanently deleted.
            </h1>
            <div className='flex justify-center w-full max-w-680px mx-auto items-center mt-10'>
                <div className='flex flex-col bg-red-300 px-16 py-6 rounded-lg border-red-500'>
                    <h1 className='text-black text-lg md:text-2xl font-bold'>
                        Are you sure you want to delete this faculty?
                    </h1>
                    <div className='flex justify-center'>
                        <button
                            className='bg-white text-black px-4 py-2 rounded-lg mt-4 hover:bg-gray-400 mr-4'
                            onClick={() => navigate('/faculty-list')}
                        >
                            Cancel
                        </button>
                        <button
                            className='bg-red-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-red-600'
                            onClick={deleteFaculty}   // ✅ now works correctly
                        >
                            Yes, Delete Faculty
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeleteFacultyList;
