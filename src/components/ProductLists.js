import React from 'react'
import Header from './Header'
import { useState,useEffect } from 'react'
import {Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'


const ProductLists = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        getData();
    },[])

    const getData = async () =>{
        let res = await fetch('http://127.0.0.1:8000/api/all/product');
        let result = await res.json();
        setProducts(result);
    }

    const deleteProduct = async (id)=>{
       let res = await fetch('http://127.0.0.1:8000/api/delete/'+id,{
           method: 'DELETE'
       });

       let result = await res.json();
       console.log(result);
       getData();
    }

    return (
        <div>
            <Header/>
            <h1>Product List</h1>
            <div className="col-sm-8 offset-sm-2">
                <Table>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Price</td>
                        <td>Description</td>
                        <td>Image</td>
                        <td>Action</td>
                    </tr>
                    {
                        products.map((product)=>
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.description}</td>
                                <td> <img style={style_img} src={"http://localhost:8000/"+product.file_path} /></td>
                                <td> 
                                    <button onClick={()=>deleteProduct(product.id)} className='btn btn-danger'>Delete</button> 
                                    <Link to={'/update/'+product.id}>
                                     <button className='btn btn-primary'>Update</button>
                                    </Link>
                                    
                                </td>
                             </tr>
                        )
                    }
                    
                    
                    
                </Table>
            </div>
        </div>
    )
}

const style_img = {
    width: 150,
}

export default ProductLists
