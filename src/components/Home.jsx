import React from 'react'
import Products from './Products'

const  Home = ()=> {
  return (
    <div className='hero'>
        <div class="card bg-dark text-black border-0">
  <img src="/assets/pexels-karolina-grabowska-5632402.jpg" className="card-img" alt="" />
  <div class="card-img-overlay">
      <div className="container">
    <h5 class="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
    <p class="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
  </div>
</div>
</div>
<Products/>
    </div>
  )
}

export default Home