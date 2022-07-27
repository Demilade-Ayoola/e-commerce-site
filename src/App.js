import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,Routes,
  Route, Link} from 'react-router-dom'
import Products from './components/Products';
import Product from './components/Product';


function App() {
  return (
    <>
   <Router>
    <Navbar/>
    <Routes>
    <Route exact path='/' element={<Home/>}></Route>
    <Route exact path='/Product/:id' element={<Product/>}></Route>
    <Route exact path='/Products' element={<Products/>}></Route>
    </Routes>
    </Router>
    </>
  )
}

export default App;
