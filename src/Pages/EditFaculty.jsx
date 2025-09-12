import React, { useState } from 'react'
// import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import BackTo from '../components/BackTo';
import { useLocation } from 'react-router-dom';
import { getFirestore,doc,updateDoc } from 'firebase/firestore';
import { app } from '../Firebase';

function EditFaculty() {
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location.state);
    const [AdminNo, setAdminNo] = useState(location.state.FacultyAdminNo);
    const [name, setName] = useState(location.state.FacultyName);
    const [age, setAge] = useState(location.state.FacultyAge);
    const [email, setEmail] = useState(location.state.Facultyemail);

    const UpdateFacultyMember = async (e) => {
        e.preventDefault();
        const db = getFirestore(app)
        const docref = doc(db,'Faculty',location.state.id)
        try {
            await updateDoc(docref,{
                FacultyAdminNo: AdminNo,
                FacultyName: name,
                FacultyAge: age,
                Facultyemail: email
            })
            navigate('/faculty-list');
        } catch (error) {
            console.log(error);
            
        }
    }
    return (
        <div className='flex flex-col'>
            <div className="w-full h-20 flex items-center justify-between bg-gray-300 relative">
                <div className="absolute left-4">
                    <BackTo />
                </div>
                <h1 className="mx-auto text-2xl font-bold">Add Faculty Member</h1>
            </div>

            <div className="flex flex-col mt-4 p-4 w-3/4 md:w-1/2 mx-auto">
                <label className="mb-2 font-bold">Faculty Admin-No:</label>
                <input type="number" placeholder='Enter Faculty Admin number' value={AdminNo} onChange={(e) => setAdminNo(e.target.value)} className="border rounded-lg border-gray-400 p-2 mb-4" />

                <label className="mb-2 font-bold">Faculty Name:</label>
                <input type="text" placeholder='Enter Faculty name' value={name} onChange={(e) => setName(e.target.value)} className="border rounded-lg border-gray-400 p-2 mb-4" />

                <label className="mb-2 font-bold">Faculty Age:</label>
                <input type="number" placeholder='Enter Faculty age' value={age} onChange={(e) => setAge(e.target.value)} className="border rounded-lg  border-gray-400 p-2 mb-4" />

                <label className="mb-2 font-bold">Faculty Email:</label>
                <input type="email" placeholder='Enter Faculty email' value={email} onChange={(e) => setEmail(e.target.value)} className="border rounded-lg border-gray-400 p-2 mb-4" />

                {/* <label className="mb-2 font-bold">Student Image:</label> */}
                {/* <input onChange={handleImageUpload} type="file" /> */}

                <button onClick={UpdateFacultyMember} className="bg-blue-500 text-white p-2 rounded-lg">Update Faculty</button>
            </div>

        </div>
    )
}

export default EditFaculty
