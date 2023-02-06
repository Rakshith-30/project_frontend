import React from 'react';
import k from "C:/PRoject School/myproject/src/kmit.jpg";
import "./style.css";
function Header()
{
    return(
        <div>
        <div className="container-fluid ">
            <div className="row">
                <div className="col-sm-2">
                    <img src={k}  width="125" height="100" align="left"/>
                </div> 
                <div className="col-sm-10 pt-4">
                    <h2 align="left">
                        <b>
                            KESHAV MEMORIAL INSTITUTE OF TECHNOLOGY
                        </b>
                    </h2>
                </div>
            </div>
        </div> 
        </div>
    );
}
export default Header;