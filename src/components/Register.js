import React from 'react'
import { useState } from 'react'


const Register = () => {
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const [email,setEmail] = useState('');

    const signup = async ()=>{

        let item = {name,email,password};
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
        console.log(result);
    }

    return (
        <div className="col-sm-6 offset-sm-3">
            <h1>register</h1>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="name"/>
            <input type="email" value={email} onChange={(e=>setEmail(e.target.value))} className="form-control" placeholder="email"/>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="password"/>
            <button onClick={signup} className="btn btn-primary">Sign Up</button>
        </div>
    )
}

export default Register
