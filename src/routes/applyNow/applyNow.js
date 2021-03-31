import React from 'react'
import SignUP from '../../component/Forms/Signup/Signup';
import { getStudentsData, postStudentData}from '../../services/axios';

function applyNow(props) {
    const getStudentInfo = (studentInfo)=>{
     console.log(studentInfo);

        postStudentData(studentInfo).then(res=>console.log(res.data)).catch(err=>console.log(err.response?.data));
    }


    return (
        <div>
            <SignUP getStudentInfo={getStudentInfo}/>
        </div>
    )
}

export default applyNow
