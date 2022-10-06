import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'

function Navigation() {
const [expanded, setExpanded]=useState(false)
 
const state = useSelector((state)=> state.addItems)

const noLength= ()=>{
  return(
    <Link to="/cart" className=" d-lg-none btn btn-sm nav-linkk">
  
<i className="fa fa-shopping-cart"></i> 
</Link>
  )
}
const yesLength=()=>{
return (
  <Link to="/cart" className=" d-lg-none btn btn-sm nav-linkk">
  <span className="fa-stack fa-2x" data-count={state.length}>
<i className="fa-stack-2x fa-inverse"> </i>
<i className="fa fa-shopping-cart"></i>
</span> 
</Link>
);
}

return ( 


    <Navbar expanded ={expanded} expand="lg" bg="light" className='text-dark' variant="light">
      <Container className='cont'>
        <div className='d-flex align-items-center'>
      <Navbar.Toggle onClick={()=> setExpanded(expanded ? false : 'expanded')} aria-controls="responsive-navbar-nav" />
        <Link  to="/" className='nav-linkk'><Navbar.Brand href="" className='nav-linkk ps-4 ps-md-2 fs-4 fw-bolder'>DEMISHOP</Navbar.Brand></Link>
        </div>
        {/* <Link to="/cart" className=" d-lg-none btn btn-sm nav-linkk">
       <span className="fa-stack fa-2x" data-count={state.length}>
  <i className="fa-stack-2x fa-inverse"> </i>
  <i className="fa fa-shopping-cart"></i>
</span> 
             </Link> */}
             {state.length === 0 && noLength()}
             {state.length !== 0 && yesLength()}
              <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
          <Link to='/' onClick={()=>setExpanded(false)} className='nav-linkk nav-link text-dark' href="">Home</Link>
           <Link to='/Products' onClick={()=>setExpanded(false)} className='nav-linkk nav-link text-dark' href="">Product</Link>
           <Link to='/about' onClick={()=>setExpanded(false)} className='text-dark nav-link nav-linkk' href="">About</Link>
           <Link to='/contact' onClick={()=>setExpanded(false)} className='text-dark nav-link nav-linkk' href="">Contact</Link>
                     
                      </Nav>
          <Nav>
            
            <div className="buttons">
         <Link to="/login" onClick={()=>setExpanded(false)} className="btn btn-sm btn-outline-dark m-1">
             <i className="fa fa-sign-in "></i> Login</Link>
             <Link to="/register" onClick={()=>setExpanded(false)} className="btn-sm btn btn-outline-dark m-1">
             <i className="fa fa-user-plus "></i> Register</Link>
          
             <Link to="/cart" className="btn d-none d-lg-inline btn-outline-dark btn-sm m-1">
             <i className="fa fa-shopping-cart "></i> Cart({state.length})</Link>
               </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

)
}

export default Navigation
