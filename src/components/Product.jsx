import { useState, useEffect } from "react"
import React  from 'react'
import { useDispatch} from 'react-redux'
import { addItem, delItem, handleCounter  } from "../redux/action/index";
import { useParams } from "react-router-dom";
import Skeleton from 'react-loading-skeleton'
import "react-loading-skeleton/dist/skeleton.css"
import { Link } from 'react-router-dom';


function Product() {
    
    const {id}= useParams();
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
const [cartbtn, setCartbtn]=useState('Add to Cart')    
const [quantity, setQuantity]= useState(true)
const [counter, setCounter]= useState(1)
//storing useDispatch in a variable
const dispatch = useDispatch();

const icount = {
    count : {counter}
};

const addProduct = (product)=>{
   
   const newProduct = {
       ...product,
       ...icount
   }
   console.log(newProduct)
if (cartbtn === "Add to Cart"){
    dispatch(addItem(newProduct))
    setCartbtn('Remove from Cart')
setQuantity(false)
}
else{
    dispatch(delItem(newProduct))
    setCartbtn('Add to Cart')
setQuantity(true)

}
}

const increment = (counter)=>{
if(counter >= 10){
    setCounter(10)
}
else{
    // dispatch(handleCounter(counter))
    setCounter(counter + 1)
}
} 

const decrement = (counter)=>{
    if (counter <= 1){
        setCounter(1)
    }
    else{
        setCounter(counter - 1)
        // dispatch(handleCounter(counter))
    }
}

    useEffect(() => {

        const getProducts = async ()=>{
           
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            
                setProduct(await response.json());
                setLoading(false);
          }
    
        getProducts();
      
    }, []);
    
    const Loading = () =>{
        return(
            <>
            <div className="col-md-6">
                <Skeleton height={300}/>
            </div>
            <div className="col-md-6" style={{lineHeight:2}}>
                <Skeleton height={50} width={300}/>
                <Skeleton height={75} />
                <Skeleton height={25} width={150}/>
                <Skeleton height={50} />
                <Skeleton height={150} />
                <Skeleton height={50} width={100}/>
                <Skeleton height={50} width={100} style={{marginLeft:6}}/>
           
           
            </div>
               </>
        )
    }

    const ShowProduct = ()=>{
        return(
        <>
        <div className="col-md-6 gen-child">
            <img src={product.image} alt={product.title}
            height="300px" width="90%"/>
        </div>
        <div className="col-md-6">
            <h4 className="text-uppercase text-black-50">{product.category}</h4>
        <h1 className="display-5">{product.title}</h1>
        <p className="lead">
            Rating {product.rating && product.rating.rate + " "}  
        <i className="fa fa-star gold"></i>
        </p>
        <h3 className="display-6 fw-bold my-4">₦{product.price * 20}</h3>
        <p className="lead">{product.description}</p>
        {quantity ? (<div className="d-flex justify-content-center align-items-center">
       <button className='btn me-4 my-1 btn-sm p-2 btn-outline-dark incre' onClick = {()=>decrement(counter)}>-</button> 
       <div id='counter'><h3>{counter}</h3></div>
      <button className='btn btn-sm ms-4 my-1 p-2 btn-outline-dark incre' onClick = {()=>increment(counter)}>+</button> 
     </div> ): null}
        <button className="btn btn-outline-dark px-4 py-2"onClick={()=>addProduct(product)}>{cartbtn}</button>
        <Link to="/cart" className="btn btn-dark ms-2 px-3 py-2">Go to Cart</Link>
        
        </div>
        </> 
        )
    }   
    
    return (
    <div>
<div className="container py-5">
    <div className="row py-4">
        {loading ? <Loading/>: <ShowProduct/>}
    </div>
</div>
    </div>
  )
}

export default Product;