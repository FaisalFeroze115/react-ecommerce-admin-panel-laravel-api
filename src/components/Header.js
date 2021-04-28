import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">E-commerce</Navbar.Brand>
                <Nav className="mr-auto navbar_wrapper">
                    {
                        localStorage.getItem('user-info') ?
                        <>
                            <Link to='/add'>Add Product</Link>
                            <Link to='/update'>Update Product</Link>
                        </>
                        :
                        <>
                            <Link to='/login'>Login</Link>
                            <Link to='/register'>Register</Link>
                        </>

                    }

                </Nav>
            </Navbar>
        </div>
    )
}

export default Header
