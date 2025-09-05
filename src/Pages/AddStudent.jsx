import React, { useState } from 'react'
import BackTo from '../components/BackTo'
import {getDatabase,ref,set} from 'firebase/database'
import { app } from '../Firebase';
import { useNavigate } from 'react-router-dom';

function AddStudent() {
    const [RollNo,setRollNo] = useState('');
    const [name,setName] = useState('');
    const [age,setAge] = useState('');
    const [email,setEmail] = useState('');
    const navigate = useNavigate();

    const handleAddStudent = (e) => {
        e.preventDefault();
        const db = getDatabase(app);
        console.log(RollNo,name,age,email);
        set(ref(db,'student/'+RollNo),{
            studentName: name,
            studentAge: age,
            studentEmail: email
        })
        setRollNo('');
        setName('');
        setAge('');
        setEmail('');
        navigate('/');
    }

    return (
        // <div className='w-full h-20 flex flex-row items-center justify-start bg-gray-300 gap-'>
        //     <BackTo/>
        //     <h1 className='text-2xl font-bold'>Add Students</h1>
        // </div>

        <div className='flex flex-col'>
            <div className="w-full h-20 flex items-center justify-between bg-gray-300 relative">
                <div className="absolute left-4">
                    <BackTo />
                </div>
                <h1 className="mx-auto text-2xl font-bold">Add Students</h1>
            </div>

            <div className="flex flex-col mt-4 p-4 w-3/4 md:w-1/2 mx-auto">
                <label className="mb-2 font-bold">Student RollNo:</label>
                <input type="number" placeholder='Enter student roll number' value={RollNo} onChange={(e) => setRollNo(e.target.value)} className="border rounded-lg border-gray-400 p-2 mb-4" />

                <label className="mb-2 font-bold">Student Name:</label>
                <input type="text" placeholder='Enter student name' value={name} onChange={(e) => setName(e.target.value)} className="border rounded-lg border-gray-400 p-2 mb-4" />

                <label className="mb-2 font-bold">Student Age:</label>
                <input type="number" placeholder='Enter student age' value={age} onChange={(e) => setAge(e.target.value)} className="border rounded-lg  border-gray-400 p-2 mb-4" />

                <label className="mb-2 font-bold">Student Email:</label>
                <input type="email" placeholder='Enter student email' value={email} onChange={(e) => setEmail(e.target.value)} className="border rounded-lg border-gray-400 p-2 mb-4" />

                <button onClick={handleAddStudent} className="bg-blue-500 text-white p-2 rounded-lg">Add Student</button>
            </div>

        </div>
    )
}

export default AddStudent
