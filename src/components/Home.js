import React from 'react';
import './style.css';
import picc1 from "./pic1.jpg";
import picc2 from "./pic2.jpg";
import picc3 from "./pic3.jpg";
function Home()
{
    return(
        <div className="container-lg-fluid">
          <div className="carousel slide " id="caro" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#caro" data-bs-slide-to={0} className="active" />
              <button type="button" data-bs-target="#caro" data-bs-slide-to={1} />
              <button type="button" data-bs-target="#caro" data-bs-slide-to={2}  />
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={picc1} className=" d-block w-100 ml-5 mr-5" />
              </div>
              <div className="carousel-item">
                <img src={picc2} className=" d-block w-100" />
              </div>
              <div className="carousel-item">
                <img src={picc3} className=" d-block w-100" />
              </div>
            </div>
            {/* <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev"><span class=carousel-control-prev-icon></span></button> */}
            {/* <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next"><span class=carousel-control-next-icon></span></button>        */}
          </div>
        </div>
    );
}
export default Home;
