import React from 'react'
import Header from './Header'
import { useEffect } from 'react'
import {useHistory} from 'react-router-dom'

const Login = () => {

    const history = useHistory();
    useEffect(()=>{
        if(localStorage.getItem('user-info')){
            history.push('/add');
        }
    },[])

    return (
        <div>
            <Header/>
            <h1>Login</h1>
        </div>
    )
}

export default Login
