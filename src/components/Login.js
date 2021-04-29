import React from 'react'
import Header from './Header'
import { useEffect, useState } from 'react'
import {useHistory} from 'react-router-dom'

const Login = () => {

    const history = useHistory();
    useEffect(()=>{
        if(localStorage.getItem('user-info')){
            history.push('/add');
        }
    },[])

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const login = async ()=>{
        if(email && password){
            let item = {email, password};

            const res = await fetch('http://127.0.0.1:8000/api/login',{
                method: "POST",
                body: JSON.stringify(item),
                headers: {
                    'Content-Type':'Application/json',
                    'Accept': 'Application/json'
                }
            });

            const result = await res.json();
            localStorage.setItem('user-info',JSON.stringify(result));
            console.log(result);
            history.push('/add');

        }else{
            return;
        }
    }

    return (
        <div>
            <Header/>
            <h1>Login</h1>
            <div className="col-sm-6 offset-sm-3">
                <input value={email} type="email" 
                placeholder="Email..." className="form-control" onChange={(e)=>setEmail(e.target.value)} />
                <input value={password} type="password" 
                placeholder="Password..." className="form-control" onChange={(e)=>setPassword(e.target.value)} />
                <button onClick={login} className="btn btn-primary">Login</button>
            </div>
            
        </div>
    )
}

export default Login
