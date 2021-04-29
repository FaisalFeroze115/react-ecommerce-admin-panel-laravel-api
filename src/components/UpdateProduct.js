import React from 'react'
import Header from './Header'
import {withRouter} from 'react-router-dom'
import { useState, useEffect} from 'react'

const UpdateProduct = (props) => {
    const [data, setData] = useState([]);
    console.log(props.match.params.id);
    useEffect( async ()=>{
        let res = await fetch('http://127.0.0.1:8000/api/get/'+props.match.params.id);
        let result = await res.json();
        setData(result);
    },[])
    return (
        <div>
            <Header/>
            <h1>Update Product</h1>
            <div className="col-sm-6 offset-sm-3">
                <input onChange={(e)=>setName(e.target.value)} value={name} className='form-control' placeholder='name..' type='text'/>

                <input onChange={(e)=>setFile(e.target.files[0])} className='form-control' placeholder='file' type='file'/>

                <input onChange={(e)=>setPrice(e.target.value)} value={price} className='form-control' placeholder='price..' type='text'/>

                <input onChange={(e)=>setDescription(e.target.value)} value={description} className='form-control' placeholder='description..' type='text'/>

                <button onClick={addProduct} className="btn btn-primary">Add Product</button>
            </div>
        </div>
    )
}

export default withRouter(UpdateProduct)
