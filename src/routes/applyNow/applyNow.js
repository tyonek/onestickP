import React from 'react'
import SignUP from '../../component/Forms/Signup/Signup';
import Axios from 'axios';
function applyNow(props) {
    const getStudentInfo = (studentInfo)=>{
        console.log(studentInfo);
    }


    return (
        <div>
            <SignUP getStudentInfo={getStudentInfo}/>
        </div>
    )
}

export default applyNow
