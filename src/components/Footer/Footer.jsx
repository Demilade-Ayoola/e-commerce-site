import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div> <footer class="site-footer bg-light text-dark">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 px-2 flecx flex-column col-md-3">
         <div>   <h2 id='about' className='d-flex' href=""><div className="logo">DEMISHOP</div></h2>
<p className='text-dark  '>Making online shopping fast and relaible.</p>
          </div>
                  </div>
                  <div className=" col-sm-6 col-6 col-md-3 addpad"><h6>Useful Links</h6>
          <ul className="footer-links">
            <li><a href="">Content</a></li>
            <li><a href="">How it works</a></li>
            <li><a href="">Create</a></li>
            <li><a href="">Explore</a></li>
            <li><a href="">Terms & Services</a></li>
            </ul>
          </div>


        <div className="col-sm-6 col-6 col-md-3">
          <h6>Community</h6>
          <ul className="footer-links">
            <li><a href="">Help Center</a></li>
            <li><a href="">Partners</a></li>
            <li><a href="">Suggestions</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Newsletters</a></li>
           </ul>
        </div>

        <div className="col-sm-6 col-6 col-md-3">
          <h6>Partner</h6>
          <ul className="footer-links">
            <li><a href="">Our Partner</a></li>
            <li><a href="">Become a Partner</a></li>
          </ul>
        </div>
      </div>
      <hr className='brand-color'/>
    </div>
    <div className="container" id ='contact'>
      <div className="row">
        <div className="col-md-8 col-sm-6">
          <p className="copyright-text">Copyright &copy; 2022 All Rights Reserved by Demilade Ayoola.
          </p>
        </div>

        <div className="col-md-4 col-sm-6 col-12">
          <ul className="social-icons">
            <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
            <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
            <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
            <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>   
          </ul>
        </div>
      </div>
    </div>
</footer>
</div>
  )
}

export default Footer
