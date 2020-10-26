import React from 'react';
import {NavLink} from 'react-router-dom';


const Navbar = () =>{

    return (
      <div>
        <div className='container-fluid nav_bg'>
            <div className='raw'>
                <div className='col-10 mx-auto'>

        
       
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink class="navbar-brand" to="/">Navbar</NavLink>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <NavLink 
         exact 
         class="nav-link active"
          aria-current="page" to="/">Home</NavLink>
      </li>
      <li  class="nav-item">
        <NavLink  class="nav-link" to="/service">Service</NavLink>
      </li>
      <li class="nav-item">
        <NavLink class="nav-link" to="/about">About</NavLink>
      </li>
      <li class="nav-item">
        <NavLink  class="nav-link" to="/contect">Contect</NavLink>
      </li>
    </ul>
   
  </div>
</nav>
</div>
</div>
</div>
        </div>
    );
}
export default Navbar;