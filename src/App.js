import 'bootstrap/dist/css/bootstrap.min.css';
import Checkout from './components/Checkout'
import './App.css';
import Footer from './components/Footer/Footer'
import Home from './components/Home';
import Navigation from './components/Navigation';
import {
  BrowserRouter as Router,Routes,
  Route, Link} from 'react-router-dom'
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';

function App() {
  return (
    <>
   <Router>
    <Navigation/>
    <Routes>
    <Route exact path='/' element={<Home/>}></Route>
    <Route exact path='/Product/:id' element={<Product/>}></Route>
    <Route exact path='/Products' element={<Products/>}></Route>
    <Route exact path='/Cart' element={<Cart/>}> </Route>
    <Route exact path='/Checkout' element={<Checkout/>}></Route>
    </Routes>
    <Footer/>
    </Router>
    </>
  )
}

export default App;
