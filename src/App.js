import { Button } from 'react-bootstrap';
import Header from './components/Header'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Register from './components/Register'
import AddProduct from './components/AddProduct'
import UpdateProduct from './components/UpdateProduct'
import Protected from './components/Protected'



function App() {
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
        <Route path="/add">
          {/* <AddProduct/> */}
          <Protected Cmp={AddProduct}/>
        </Route>
        <Route path="/update">
          <Protected Cmp={UpdateProduct}/>
          {/* <UpdateProduct/> */}
        </Route>
      </Router>
    </div>
  );
}

export default App;
