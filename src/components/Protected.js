import React from 'react'
import {useHistory} from 'react-router-dom'
import {useState} from 'react'


const Protected = ({Cmp}) => {

    let history = useHistory();
    useState(()=>{
        if(!localStorage.getItem('user-info')){
            history.push('/login');
        }
    },[])

    return (
        <div>
            <Cmp/>
        </div>
    )
}

export default Protected
