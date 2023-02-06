import React from 'react';
import './style.css';
function CreateProfile()
{
    return(
        <div>
                <div className="row">
          <div className="col-75">
            <div className="container">
              <form action="/action_page.php">
              
                <div className="row">
                  <div className="col-25">
                    <h3>CREATE PROFILE</h3>
                    <label for="fname"><i className="fa fa-user"></i> FIRST Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Enter FIRST Name"/>
                    <label for="fname"><i className="fa fa-user"></i> LAST Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Enter last Name"/>
                    <label for="ROLL NUMBER">ROLL NUMBER</label>
                    <input type="text" id="roll" name="rollno" />
                    <label for="email"><i className="fa fa-envelope"></i> Email</label>
                    <input type="text" id="email" name="email" placeholder="sample@gmail.com"/>
                    <label for="adr"><i className="fa fa-address-card-o"></i> Address</label>
                    <input type="text" id="adr" name="address" placeholder="542 W. 15th Street"/>
                    <label for="PHONE NUMBER"><i className="fa fa-address-card-o"></i> PHONE NUMBER</label>
                    <input type="tel" id="phno" name="phno" placeholder="+91"/>
                
                    <label for="city"><i className="fa fa-institution"></i> City</label>
                    <input type="text" id="city" name="city" placeholder="HYDERABAD"/>
                    <div className="row">
                        <div className="col-50">
                          <label for="Branch">Branch</label>
                          <select id="user" name="Branch" style={{border:"2px solid black",padding:"5px"}}>
                            <option value=""></option>
                            <option value="CSE">CSE</option>
                            <option value="AIML">AIML</option>
                            <option value="IT">IT</option>
                            <option value="CSD">CSD</option>
                          </select>
                        </div>
                        <div className="col-50">
                          <label for="Course">Course</label>
                          <select id="user" name="Course" style={{border:"2px solid black",padding:"5px"}}>
                            <option value=""></option>
                            <option value="BTech">BTech</option>
                            <option value="Data Analyst">Data Analyst</option>
                            <option value="Web Development">Web Development</option>
                            <option value="Animation">Animation</option>
                          </select>
                        </div>
                      </div>                      
                  </div>       
                  <div className="col-25">
                    <br/><br/><br/>
                    <label for="Graduation"><i className="fa fa-graduation-cap"></i> Year Of Graduation</label>
                    <input type="number" id="Graduation" name="Graduation"/>
                    <label for="Qualifications"><i className="fa fa-list"></i> Qualifications</label>
                    <input type="text" id="Qualifications" name="Qualifications"/>
                    <label for="Trade"> Trade</label>
                    <input type="text" id="trade" name="trade"/>
                    <label for="Languages"><i className="fa fa-language"></i> Languages</label>
                    <input type="text" id="Languages" name="Languages"/>
                    <label for="Experience"><i className="fa fa-history"></i> Experience</label>
                    <input type="number" id="Experience" name="Experience"/>
                    <label for="Copmany"><i className="fa fa-building-o"></i> Copmany</label>
                    <input type="text" id="Copmany" name="Copmany"/>
                    <label for="Status">Present Status</label>
                    <input type="text" id="Status" name="Status"/> 
                  </div>
                  <div className="col-25">
                    <br/><br/><br/>
                    <label for="bio">About Yourself</label>
                    <textarea id="bio" name="bio" rows="4" cols="50" placeholder="Write about yourself"></textarea>
                    <label for="myfile">Upload your resume:</label>
                    <input type="file" id="myfile" name="myfile"/>
                    <label for="myimg">Upload your profile:</label>
                    <input type="file" id="myimg" name="myimg"/>
                  </div>
                </div>
                <input type="submit" value="Register" className="btn"/>
              </form>
            </div>
          </div>
          </div>
         
        </div>
    );
}
export default CreateProfile;