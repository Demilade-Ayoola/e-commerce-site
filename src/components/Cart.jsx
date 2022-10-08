import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import { useDispatch} from 'react-redux'
import { delItem } from "../redux/action/index";
import {Link} from "react-router-dom"

function Cart() {
  const state = useSelector((state)=> state.addItems)
  const dispatch = useDispatch();
var total = 0;

  const handleClose = (item)=>{
dispatch(delItem(item))
  }



   const summary = (cartItem)=>{
     var price = cartItem.price * 20
    var indiTotal= cartItem.count.counter * price
    total = total + indiTotal;
   
    return (
<>
</> 
  );
   }
  const cartItems =(cartItem) =>{

    return(
     <> 
    
<div className="px-4 my-2 bg-white rounded-3" key={cartItem.id}>
  <div className='container py-3'>
    <button className='btn-close float-end' onClick={()=> handleClose(cartItem)} aria-label="close"></button>
    <div className="row justify-content-center">
      <div className="col-md">
        <img src={cartItem.image} alt={cartItem.title} height="200px" width='180px' />
      </div>
      <div className="col-md-4 align-items-center">
        <h3>{cartItem.title}</h3>
<p className='lead fw-bold'>₦{cartItem.price * 20}</p>

<h4>Quantity: {cartItem.count.counter}</h4>
      </div>
    </div>
  </div>
</div>
</>
    );
  }
  const emptyCart = ()=>{
   return(
   <div className="px-4 my-5 bg-white rounded-3">
<div className="container py-4">
  <div className="row">
    <h3>Your Cart is Empty</h3>
  </div>
</div>
    </div>
   )}
   
   const checkBtn =()=>{

     return (
<div className="container">
<div className="row d-flex justify-content-center">
<Link to='/checkout'  state={{total}} className='btn  btn-outline-primary mb-5 w-25'>Checkout ₦{total}</Link>
</div>
</div>

     );
   }
  return (
   <div className='bg-light'>
 
{state.length !== 0 && 
<div>
  {state.map(summary)}
  <div className='d-flex justify-content-end px-2 align-items-center'><h3>Total: ₦{total}</h3></div>
  </div> }
   {state.length === 0 && emptyCart()}
    {state.length !== 0 && state.map(cartItems)}
{state.length !== 0 && checkBtn()}
  </div>
  )
}

export default Cart