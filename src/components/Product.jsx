import { useState, useEffect } from "react"
import React  from 'react'
import { useDispatch} from 'react-redux'
import { addItem, delItem } from "../redux/action/index";
import { useParams } from "react-router-dom";
import Skeleton from 'react-loading-skeleton'
import "react-loading-skeleton/dist/skeleton.css"
import { Link } from 'react-router-dom';



function Product() {
    
    const {id}= useParams();
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
const [cartbtn, setCartbtn]=useState('Add to Cart')    
//storing useDispatch in a variable
const dispatch = useDispatch();

const addProduct = (product)=>{
   
if (cartbtn === "Add to Cart"){
    dispatch(addItem(product))
    setCartbtn('Remove from Cart')

}
else{
    dispatch(delItem(product))
    setCartbtn('Add to Cart')

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
        <h3 className="display-6 fw-bold my-4">${product.price}</h3>
        <p className="lead">{product.description}</p>
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