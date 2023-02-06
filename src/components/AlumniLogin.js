import React from 'react';
import './style.css';
import k from "C:/PRoject School/myproject/src/dippam.jpg";
function AlumniLogin()
{
    return(
        <div>
            <div className="wrapper">
          <div className="logo">
              <img src={k} alt=""/>
          </div>
          <div className="text-center mt-4 name">
              ALUMNI LOGIN
          </div>
          <form className="p-3 mt-3">
              <div className="form-field d-flex align-items-center">
                  <span className="far fa-user"></span>
                  <input type="text" name="userName" id="userName" placeholder="Username"/>
              </div>
              <div className="form-field d-flex align-items-center">
                  <span className="fas fa-key"></span>
                  <input type="password" name="password" id="pwd" placeholder="Password"/>
              </div>
              <button className="btn mt-3">Login</button>
          </form>
          <div className="text-center fs-6">
            <a href="signup">Sign up if your new!</a>
          </div>
      </div>
        </div>
    );
}
export default AlumniLogin;
