import React from 'react'
import {Navbar,Nav, NavDropdown} from 'react-bootstrap'
import { Link,useHistory } from 'react-router-dom'


const Header = () => {
    let user = JSON.parse(localStorage.getItem('user-info'));
    const history = useHistory();
    const logout = ()=>{
        localStorage.clear();
        history.push('/login');
    }
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">E-commerce</Navbar.Brand>
                <Nav className="mr-auto navbar_wrapper">
                    {
                        localStorage.getItem('user-info') ?
                        <>
                            <Link to='/'>Product List</Link>
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
                {
                    localStorage.getItem('user-info') ?
                    <Nav>
                        <NavDropdown title={user && user.name}>
                            <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    :null
                }
                
            </Navbar>
        </div>
    )
}

export default Header
