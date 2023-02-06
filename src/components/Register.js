import React from 'react';
import './style.css';
function Register()
{
    return(
        <div>
            <div className="row">
          <div className="col-75">
            <div className="container">
              <form action="/action_page.php">
              
                <div className="row">
                  <div className="col-50">
                    <h3>REGISTERATION FORM</h3>
                    <label for="fname"><i className="fa fa-user"></i> FIRST Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Enter FIRST Name"/>
                    <label for="fname"><i className="fa fa-user"></i> LAST Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Enter last Name"/>
                    <label for="email"><i className="fa fa-envelope"></i> Email</label>
                    <input type="text" id="email" name="email" placeholder="sample@gmail.com"/>
                    <label for="PHONE NUMBER"><i className="fa fa-address-card-o"></i> PHONE NUMBER</label>
                    <input type="text" id="email" name="email" placeholder="+91"/>
                    
                    <label for="city"><i className="fa fa-institution"></i> City</label>
                    <input type="text" id="city" name="city" placeholder="HYDERABAD"/>
        
                    <div className="row">
                      <div className="col-50">
                        <label for="Birthday"><i className='fa fa-calendar'></i> Birthday</label>
                        <input type="date" id="birthday" name="Birthday" />
                      </div>
                      
                    </div>
                  </div>
        
                  <div className="col-50">
                    <br/><br/>
                    <label for="fname"><i className="fa fa-user"></i> LOGIN ID</label>
                    <input type="text" id="uid" name="firstname" placeholder="Enter user ID"/>
                    <label for="pwd">Password</label>
                    <input type="password" id="pwd" name="pwd" minlength="8" size="30" required  />
                    <br/><br/>
                    <label for="pwd">Re-Enter-Password</label>
                    <input type="password" id="pwd" name="pwd" minlength="8" size="30" required />
                    
                  </div>
                  
                </div>
               
                <input type="submit" value="Register" className="btn" />
              </form>
            </div>
          </div>
          </div>
        </div>
    );
}
export default Register;
