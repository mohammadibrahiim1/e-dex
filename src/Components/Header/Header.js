import React from "react";
import "./Header.css";
import { BsFillCollectionPlayFill } from "react-icons/bs";

const Header = () => {
  return (
    <div>
      <section className="header-section">
        <div className="container">
          <div className="header-content">
            <div className="">
              <h1 className="text-white header-title">Learn Development</h1>
              <p className="text-white header-description ">
                Business, Technology and Creative Skills taught by <br />{" "}
                industry experts. Explore a wide range of skills with <br /> our
                professional tutorials.
              </p>

              <div className="text-start">
                <button className="btn btn-lg btn-light">Browse Courses</button>
              </div>
            
            </div>
           
            <div className="bg-img">
              <img src="https://i.ibb.co/mXyT0fF/macbook.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="header-footer">
         <div className="info container">
         <div className="icon-container">
            <div>
            < BsFillCollectionPlayFill className="icon" 
            style={{ width:"42px",height:"42px"}}
            />
            </div>
            <div>
                <h5>10+ Courses</h5>
                <p>Explore a Wide range of skills</p>
            </div>
          </div>
         <div className="icon-container">
            <div>
            < BsFillCollectionPlayFill className="icon" 
            style={{ width:"42px",height:"42px"}}
            />
            </div>
            <div>
                <h5>10+ Courses</h5>
                <p>Explore a Wide range of skills</p>
            </div>
          </div>
         <div className="icon-container">
            <div>
            < BsFillCollectionPlayFill className="icon" 
            style={{ width:"42px",height:"42px"}}
            />
            </div>
            <div>
                <h5>10+ Courses</h5>
                <p>Explore a Wide range of skills</p>
            </div>
          </div>
         </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
