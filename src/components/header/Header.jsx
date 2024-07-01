import React from 'react'
import { NavLink } from 'react-router-dom'
import { headerConfig } from './config'

const Header = () => {

  return (<>

        <nav className="navbar navbar-expand-lg">
  <div className="container">
    <a className="navbar-brand" href="#">
      <img src="/src/assets/images/logo.png" height="40px"
      width="202px" alt=""  />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

{
  headerConfig?.map((item) => <li className="nav-item">
          <NavLink className="nav-link font-16-700 mx-2" to={item.navlink}>{item.title} </NavLink>
       
       </li>        )
}
        
      </ul>
      <form className="d-flex" role="search">
        <button className="btn btn-primary btn-md" type="submit">Get started free</button>
      </form>
    </div>
  </div>
</nav>


    
    </>)
}

export default Header