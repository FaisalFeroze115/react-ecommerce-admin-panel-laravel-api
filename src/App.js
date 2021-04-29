import { Button } from 'react-bootstrap';
import Header from './components/Header'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Register from './components/Register'
import AddProduct from './components/AddProduct'
import UpdateProduct from './components/UpdateProduct'
import Protected from './components/Protected'
import ProductLists from './components/ProductLists'
import { useHistory } from 'react-router-dom'
import { useEffect } from 'react'



function App() {

  const history = useHistory();

  // useEffect(()=>{
  //   if(localStorage.getItem('user-info')){
  //     history.push('/add');
  // }
  // },[])


  return (
    <div className="App">
      <Router>
        {/* <Header/> */}
       
        <Route path="/login">
          <Login/>
        </Route>

        <Route path="/register">
          <Register/>
        </Route>

        <Route exact path="/">
          <Protected Cmp={ProductLists}/>
        </Route>

        <Route path="/add">
          {/* <AddProduct/> */}
          <Protected Cmp={AddProduct}/>
        </Route>

        <Route path="/update/:id">
          <Protected Cmp={UpdateProduct}/>
          {/* <UpdateProduct/> */}
        </Route>

      </Router>
    </div>
  );
}

export default App;
