import React from 'react'
import Header from './Header'
import { useState } from 'react'

const AddProduct = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [file, setFile] = useState('');
    const [description, setDescription] = useState('');

    const addProduct = async ()=>{
        if(name && price && file && description){
            console.log(name,price,file,description);

            const formData = new FormData();
            formData.append('file',file);
            formData.append('name',name);
            formData.append('price',price);
            formData.append('description',description);

            let result = await fetch('http://127.0.0.1:8000/api/add/product',{
                method:'POST',
                body: formData
            });

            alert('Product is added');

            setName('');
            setPrice('');
            setFile('');
            setDescription('');
        }else{
            alert('All fields must be filled up');
        }
    }

    return (
        <div>
            <Header/>
            <h1>Add product</h1>
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

export default AddProduct
