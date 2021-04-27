import { Button } from 'react-bootstrap';
import Header from './components/Header'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Register from './components/Register'
import AddProduct from './components/AddProduct'
import UpdateProduct from './components/UpdateProduct'


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <h1>Ecommerce</h1>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/add">
          <AddProduct/>
        </Route>
        <Route path="/update">
          <UpdateProduct/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
