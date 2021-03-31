import React, { useState } from 'react'
import {withRouter} from 'react-router-dom'
import SignUP from '../../component/Forms/Signup/Signup';
import { getStudentsData, postStudentData } from '../../services/axios';

function ApplyNow(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState({ error: true, errorMessage: "" })
    const getStudentInfo = (studentInfo) => {

        setIsLoading(true)
        postStudentData(studentInfo).then(res => {
            setIsLoading(false);
            props.history.push('/login');

        }).catch(err => {
            setIsLoading(false)
            setError({ error: true, errorMessage: err.response?.data.errorMessage || 'Oops Something Went Wrong' })

        });
    }


    return (
        <div>
            <SignUP getStudentInfo={getStudentInfo} isLoading={isLoading} error={error} />
        </div>
    )
}

export default withRouter(ApplyNow)
