import React from 'react'
import { useState, useEffect } from 'react'
import {useHistory} from 'react-router-dom'
import Header from './Header'

const Register = () => {
    
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const [email,setEmail] = useState('');
    const history = useHistory();

    const signup = async ()=>{

        let item = {name,email,password};
        if(!name || !password || !email) return;
        console.log('before hitting api',item);
        const res = await fetch('http://127.0.0.1:8000/api/register',{
            method:'POST',
            body: JSON.stringify(item),
            headers: 
                {
                    'Content-Type': "application/json",
                    "Accept": "application/json"
                }
        })
        const result = await res.json();
        localStorage.setItem('user-info',JSON.stringify(result));
        history.push('/add');
    }

    useEffect(()=>{
        if(localStorage.getItem('user-info')){
            history.push('/add');
        }
    },[])
    

    return (
        <div>
            <Header/>
            <div className="col-sm-6 offset-sm-3">
                <h1>register</h1>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="name"/>
                <input type="email" value={email} onChange={(e=>setEmail(e.target.value))} className="form-control" placeholder="email"/>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="password"/>
                <button onClick={signup} className="btn btn-primary">Sign Up</button>
            </div>
        </div>
        
    )
}

export default Register
