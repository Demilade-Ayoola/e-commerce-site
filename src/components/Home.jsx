import React from 'react'
import Products from './Products'

const  Home = ()=> {
  return (
    <div className='hero'>
        <div className="card bg-dark text-black border-0">
  <img src="/assets/bg-img.jpg" className="card-img" alt="" />
  <div className="card-img-overlay">
      <div className="container n-arrivals">
    <h2 className="card-title mt-3 mb-0">NEW SEASON ARRIVALS</h2>
    {/* <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p> */}
  </div>
</div>
</div>
<Products/>
    </div>
  )
}

export default Home