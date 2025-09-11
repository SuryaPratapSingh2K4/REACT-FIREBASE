import React, { useEffect, useState } from 'react'
import { app } from '../Firebase'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import FacultyCard from '../components/FacultyCard'

function FacultList() {
    const [Facultydata,setFacultyData] = useState(null)
    useEffect(() => {
        info();
    }, [])
    const info = async () => {
        const db = getFirestore(app);
        const ref = collection(db, 'Faculty')
        const docSnap = await getDocs(ref)
        const data = docSnap.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))
        console.log(data);
        setFacultyData(data)
    }
    return (
        <div className='flex flex-col'>
            <h1 className='font-bold text-center mt-8 text-2xl'>Faculty List</h1>

            <div className='p-4'>
                {
                    Facultydata && Facultydata.length > 0 ?
                        (
                            <div>
                                {
                                    Facultydata.map((faculty) => (
                                        <div key={faculty.id}>
                                            <FacultyCard fdata={faculty}/>
                                        </div>
                                    ))
                                }
                            </div>
                        ) :
                        (
                            <div>
                                <h1 className='text-2xl font-bold text-center'>No Faculty Found</h1>
                            </div>
                        )
                }
            </div>
        </div>
    )
}

export default FacultList
