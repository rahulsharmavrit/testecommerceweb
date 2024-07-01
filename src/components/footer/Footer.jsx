import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (<>
  
  <div className="div container-fluid bg-danger text-white py-5 mt-5">
    <div className="container">
    <div className="row">
    <div className="col-lg-4">
        <h4>My Logo</h4>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi totam magnam accusamus blanditiis aspernatur? Accusantium maxime id possimus quibusdam incidunt iure quas alias, voluptas commodi.</p>
    </div>

    <div className="col-lg-5">
    <h4>Site Links</h4>
    <ul className='list-unstyled'>
                            <li className='me-3'> <NavLink className="text-decoration-none text-white" to="/"> Home </NavLink> </li>
                            <li className='me-3'> <NavLink className="text-decoration-none text-white" to="/about"> About </NavLink> </li>
                            <li className='me-3'> <NavLink className="text-decoration-none text-white" to="/products"> Products </NavLink> </li>
                            <li className='me-3'> <NavLink className="text-decoration-none text-white" to="/contact"> Contact </NavLink> </li>
                        </ul>
    </div>
    <div className="col-lg-3">
    <h4>Contact Us</h4>
    <ul className='list-unstyled'>
                            <li className='me-3'> Address - Lorem ipsum dolor sit amet. </li>
                            <li className='me-3'> Email - admin@gmail.com </li>
                            <li className='me-3'> Phone - +977-980404054505</li>

                        </ul>
    </div>
    </div>
    </div>
  </div>
  
  
  </>)
}

export default Footer