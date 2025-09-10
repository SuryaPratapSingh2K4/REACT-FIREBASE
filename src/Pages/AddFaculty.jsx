import React, { useState } from 'react'
import BackTo from '../components/BackTo';
import { getFirestore,addDoc,collection } from 'firebase/firestore';
import { app } from '../Firebase';
import { useNavigate } from 'react-router-dom';

function AddFaculty() {
    const [AdminNo, setAdminNo] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const handleFacultyMember = async (e) => {
        e.preventDefault();
        console.log(AdminNo,name,age,email);
        const db = getFirestore(app);
        const docRef = await addDoc(collection(db,'Faculty'),{
            "Faculty Admin-No": AdminNo,
            "Faculty Name": name,
            "Faculty Age": age,
            "Faculty email": email
        })
        console.log(docRef,docRef.id);
        navigate('/')
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

                <button onClick={handleFacultyMember} className="bg-blue-500 text-white p-2 rounded-lg">Add Faculty</button>
            </div>

        </div>
    )
}

export default AddFaculty
