import React from 'react';
import './style.css';
import admin from "C:/PRoject School/myproject/src/adminjpg.jpg";
import alumni from "C:/PRoject School/myproject/src/alumnii-login.jpg";
import company from "C:/PRoject School/myproject/src/company.jpg";
function Login()
{
    return(
        <div>
            
  <br/><br/><br/>
<div className=" d-sm-flex justify-content-sm-around m-5" align="center">
    <div>
    <a href="adminlogin"><img src={admin} className="one" alt="Admin" width="200px" height="200px"/></a>
    <h4 className="p-3 m-3">Admin</h4>
    </div>
    <div>
    <a href="alumnilogin"><img src={alumni} className="one"  width="200px" height="200px"/></a>
    <h4 className="p-3 m-3">Alumni</h4>
    </div>
    <div>
    <a href="companylogin"><img src={company} className="one"  width="200px"  height="200px"/></a>
    <h4 className="p-3 m-3">Company</h4>
    </div>
</div>

        </div>
    );
}
export default Login;