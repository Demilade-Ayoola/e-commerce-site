import {React,useEffect, useState} from 'react'
import PayStackPop from "@paystack/inline-js"
import {Alert} from 'react-bootstrap'
import {Link, useLocation} from 'react-router-dom'

function Checkout() {
    const location = useLocation()
    const {total} = location.state

const [flag, setFlag] = useState(false)
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [message, setMessage]= useState('')
const [cancel, setCancel]=useState('')
const [amount, setAmount]= useState()
const [address, setAddress]= useState('')
const [number, setNumber]= useState()

useEffect(() => {
const sum = {total}
   console.log({total})
setAmount(sum.total)
}, [])

function handlePay(e){
    e.preventDefault();
if(!email || !name || !address || !number){
    setFlag(true);
}else{
    setFlag(false)
    const paystack= new PayStackPop()
    paystack.newTransaction({
        key:'pk_test_8a7597f7dd06572719f20a315cf00871def662ff',
    amount: amount * 100,
    name,
    email,
    onSuccess(transaction){
        setMessage(`Payment Complete! Check your E-mail for details. Reference ${transaction.reference}`)
        
},
onCancel(){
    setCancel('You have Canceled the transaction')
}
    })
}
}
    return (
    <>
        
        <div>
    {message ? <Link className='link' to='/'><div className="link-div">
        <Alert color="primary" variant = 'info'>
        {message}
    </Alert>
    </div>
    </Link> 
    : null}
{cancel ?  <Alert color="primary" variant = 'info'>
        {cancel}
    </Alert>
    : null}
    
    <form className='mb-5 form-control2' onSubmit={handlePay}>
        <h3 className='text-center py-2'>Make Payment</h3>
    <div className='fields'>
    <div>
        <h3 className="m-1 p-1 px-3">Amount: ₦{amount} </h3>
    </div>
    <div>
        <label className='text-dark'> Your Name</label>
    <input  className=' input m-1 p-1 px-3' type='text' value={name} placeholder='Enter Name'onChange={(event)=>setName(event.target.value)}/>
    </div>

    <div>
        <label className='text-dark'>Your Email</label>
    <input  className=' input m-1 p-1 px-3' type='email' value={email} placeholder='Enter Your Email'onChange={(event)=>setEmail(event.target.value)}/>
    </div>
    <div>
        <label className='text-dark'> Billing Address</label>
    <input  className=' input m-1 p-1 px-3' type='text' value={address} placeholder=' Enter Billing Address'onChange={(event)=>setAddress(event.target.value)}/>
    </div>

<div>
        <label className='text-dark'> Phone Number</label>
    <input  className=' input m-1 p-1 px-3' type='text' value={number} placeholder='Enter Phone Number'onChange={(event)=>setNumber(event.target.value)}/>
    </div>

    <button  className=" input btn-primary text-center m-1 my-2 btn" type='submit'>
        Pay
    </button>
    </div>
    {flag && (
    <Alert color="primary" variant = 'danger'>
        Please fill all boxes
    </Alert>
)
}
    </form>

    </div>
  
    </>
  )
}

export default Checkout