import React from 'react';
import './style.css';
function Nav()
{
    return(
      <div>
        <div className="container-fluid">
        <nav className="navbar navbar-expand-lg position:fixed sticky-top well ; bg-danger">
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation"
                style={{color: "white"}}>
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className=" collapse navbar-collapse " id="navbarTogglerDemo02">
                
                <ul className="navbar-nav  mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" href="home"><i className="fa-solid fa-book-open-reader"></i>Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#About"><i className="fa-solid fa-list"></i>Technical Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about"><i className="fa-solid fa-info-circle"></i>About</a>
                            </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#Events"><i className="fa-solid fa-database"></i>Events</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Contact"><i className="fa-solid fa-contact-card"></i>Contact</a>
                        </li>
                       
                </ul>
                            <a href="login" className="btn btn-primary ms-auto " id="log" >LogIn</a>
                            <a href="register" className="btn btn-secondary ms-2" id="reg">Register</a>
        
                        
                </div>
    </nav>
    </div>
    </div>
    );
}
export default Nav;
