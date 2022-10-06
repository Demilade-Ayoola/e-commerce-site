import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch} from 'react-redux'
import { addItem, delItem } from "../redux/action/index";
import {Link} from "react-router-dom"

function Cart() {
  const state = useSelector((state)=> state.addItems)
//const countState = useSelector((state)=> state.count)
  const dispatch = useDispatch()
//var total = 0;
  const handleClose = (item)=>{
dispatch(delItem(item))
  }
// console.log(state)
//   console.log(countState)
  const summary = (cartItem)=>{
  var  total = 0 + cartItem.price;
console.log(cartItem)
  return (
    <div className='d-flex p-2 justify-content-between'>
      <h3></h3>
      <h3>Total: {total}</h3>
    </div>
  );
  }
  const cartItems =(cartItem) =>{

   return(
<div className="px-4 my-2 bg-light rounded-3" key={cartItem.id}>
  <div className='container py-3'>
    <button className='btn-close float-end' onClick={()=> handleClose(cartItem)} aria-label="close"></button>
    <div className="row justify-content-center">
      <div className="col-md">
        <img src={cartItem.image} alt={cartItem.title} height="200px" width='180px' />
      </div>
      <div className="col-md-4">
        <h3>{cartItem.title}</h3>
<p className='lead fw-bold'>${cartItem.price}</p>
      </div>
    </div>
  </div>
</div>

    );
  }
  const emptyCart = ()=>{
   return(
   <div className="px-4 my-5 bg-light rounded-3">
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
<Link to='/checkout' className='btn  btn-outline-primary mb-5 w-25'>Proceed to Checkout</Link>
</div>
</div>

     );
   }
  return (
   <>
   {state.length === 0 && emptyCart()}
   {state.length !== 0 && state.map(summary)}
    {state.length !== 0 && state.map(cartItems)}
{state.length !== 0 && checkBtn()}
  </>
  )
}

export default Cart