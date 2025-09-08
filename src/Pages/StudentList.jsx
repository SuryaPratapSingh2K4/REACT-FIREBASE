import React, { useEffect, useState } from 'react'
import { getDatabase, onValue, ref } from 'firebase/database'
import { app } from '../Firebase'
import BackTo from '../components/BackTo'
import Card from '../components/Card';

function StudentList() {
    const [studentData, setStudentData] = useState(null);
    useEffect(() => {
        const db = getDatabase(app);
        const studentList = ref(db, 'student')
        onValue(studentList, (snapshot) => {
            const data = snapshot.val();
            console.log(data);
            setStudentData(data);
        })

    }, [])
    return (
        <div className='flex flex-col'>
            

            <div className='p-4'>
                {
                    studentData ?
                        (
                            <div>
                                {
                                    Object.entries(studentData).map(([item, value]) => (
                                        <div key={item}>
                                            <Card items={item} values={value} />
                                        </div>
                                    ))
                                }
                            </div>
                        ) :
                        (
                            <div>
                                <h1 className='text-2xl font-bold text-center'>No Students Found</h1>
                            </div>
                        )
                }
            </div>
        </div>
    )
}

export default StudentList
