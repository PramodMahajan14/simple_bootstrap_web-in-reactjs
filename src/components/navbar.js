import React from 'react'
import { Link } from 'react-router-dom';
import '../index.css'


const Navbar = ()=>{
    return(<>
   <div className="container-fluid nav_bg">
       <div className="row">
           <div className="col-18 max-auto">

      

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid nav-size">
    <a className="navbar-brand" href="#">Mahajan</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"><i class="bi bi-justify-right"></i></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
          <Link className="nav-link" to={'/'}>Home</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to={'/about'}>About</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to={'/contact'}>Contact</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to={'/service'}>Services</Link>
        </li>
      </ul>
      
      
    </div>
  </div>
</nav>

</div>
       </div>
   </div>

    </>)
}
export default Navbar;