import React from 'react';
import { NavLink } from 'react-router-dom';



function Header() {

  return (

    <div>
    <nav className="navbar navbar-light bg-light justify-content-end">
  {/* <a className="navbar-brand" */}
   
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
    <div class="navbar-nav">
        <NavLink 
        to="/Home"
        end
        className={({isActive}) =>
        isActive ? "nav-link active" : "nav-link" 
      }
      >
        Home<span class="sr-only">(current)</span>
        </NavLink>
        <NavLink 
        to="projects"
        className={({isActive}) => 
        isActive ? "nav-link active" : "nav-link" 
    }
        >
        Projects
        </NavLink>
        <NavLink 
        to="contact"
        className={({isActive}) => 
        isActive ? "nav-link active" : "nav-link" 
    }
        >
        Contact
        </NavLink>

    
    </div>
    
    {/* {<h1>React Portfolio</h1>} */}
  </div>

</nav>

    
</div>

  )
}

export default Header