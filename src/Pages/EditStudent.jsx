import React, {  useState } from 'react'
import BackTo from '../components/BackTo'
import { getDatabase, ref, update } from 'firebase/database'
import { app } from '../Firebase';
import { useLocation, useNavigate } from 'react-router-dom';

function EditStudent() {
    const navigate = useNavigate();

    const location = useLocation();
    const [RollNo, setRollNo] = useState(location.state[1].studentRollNo);
    const [name, setName] = useState(location.state[1].studentName);
    const [age, setAge] = useState(location.state[1].studentAge);
    const [email, setEmail] = useState(location.state[1].studentEmail);

    console.log(location.state);
    

    const handleUpdateStudent = (e) => {
        e.preventDefault();
        const db = getDatabase(app);
        const myStudentRef = ref(db,'student/'+location.state[0]);
        update(myStudentRef,{
            studentRollNo: RollNo,
            studentName: name,
            studentAge: age,
            studentEmail: email
        }).then(() => {
            navigate('/');
        }).catch((error) => {
            alert(error);
        })
    }

    return (
        <div className='flex flex-col'>
            <div className="w-full h-20 flex items-center justify-between bg-gray-300 relative">
                <div className="absolute left-4">
                    <BackTo to="/student-list" />
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

                <button onClick={handleUpdateStudent} className="bg-blue-500 text-white p-2 rounded-lg">Update Student Details</button>
            </div>

        </div>
    )
}

export default EditStudent
