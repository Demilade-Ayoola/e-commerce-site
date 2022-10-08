import React, {useState, useEffect}  from 'react'
import Skeleton from 'react-loading-skeleton'
import "react-loading-skeleton/dist/skeleton.css"
import { Link } from 'react-router-dom';

function Products() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted =true;
    
    useEffect(() => {
      const getProducts = async ()=>{
          setLoading(true);
          const response = await fetch('https://fakestoreapi.com/products');
          if(componentMounted){
              setData(await response.clone().json());
              setFilter(await response.json());
              setLoading(false);
          }
     
          return() => {
              componentMounted= false;
          }
        }

      getProducts();
    }, [])
    
const Loading = ()=>{
   return(  <>
    <div className="col-md-3">
        <Skeleton height={250} />
    </div>
    <div className="col-md-3">
        <Skeleton height={250} />
    </div>
    <div className="col-md-3">
        <Skeleton height={250} />
    </div>
    <div className="col-md-3">
        <Skeleton height={250} />
    </div>
    </>
    );
};
const filterProduct=(cat) =>{
const updatedList = data.filter((x)=>x.category === cat);
setFilter(updatedList);
}
const ShowProducts = ()=> {
return(
   <>
     <div className="buttons d-flex flex-wrap justify-content-center mb-2 pb-5">
    <button className="btn btn-outline-dark btn-sm mb-2 me-2"onClick={()=>setFilter(data)}>All</button>
    <button className="btn btn-outline-dark btn-sm mb-2 me-2"onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
    <button className="btn btn-outline-dark btn-sm mb-2 me-2"onClick={()=>filterProduct("women's clothing")}>Women's Clothing</button>
    <button className="btn btn-outline-dark btn-sm mb-2 me-2"onClick={()=>filterProduct("jewelry")}>Jewelry</button>
    <button className="btn btn-outline-dark btn-sm mb-2 me-2"onClick={()=>filterProduct("electronics")}>Electronics</button>
    </div>
  {filter.map((product)=>{
      return(
          <>
          <div className="col-md-4 col-lg-3 col-sm-6 mb-3 col-12" key={product.id}>
          <div className="card align-items-center h-100 text-center p-4" >
  <img src={product.image} className="card-img-top" alt={product.title} height= "200px"/>
  <div className="card-body">
    <h6 className="card-title mb-0">{product.title.substring(0,12)}...</h6>
    <p className="card-text lead fw-bolder">
    ₦{product.price * 20}
    </p>
    <Link to={`/Product/${product.id}`} className="btn btn-outline-dark">Buy Now</Link>
  </div>
</div>
          </div>
          </>
      )
  })}
   </>
);
}
  return ( 

<div className="container my-5 py-5">
    <div className="row">
        <div className="col-12 mb-5">
           <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
        <hr/>
        </div>
    </div>
    <div className="row justify-content-center">
        {loading ? <Loading/> : <ShowProducts/>}
    </div>
</div>

  )
}

export default Products