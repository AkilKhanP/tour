import React from "react";
import Button from "react-bootstrap/Button";
import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal";
import { useState } from "react";
import img from "../img/logo.png";
import { Link } from 'react-router-dom'
import axios from "axios";
import {useNavigate} from "react-router-dom"

function HeaderLogout(props) {
    
     const log =props.logOut
    const navigate = useNavigate()
    const logOutData = () => {
      axios
        .post("http://localhost:5000/api/auth/logout",log)
        .then((res) => { 
        navigate('/', { replace: true }) 
         localStorage.removeItem('logInData')
       
        window.location.reload()
       })
        .catch((err) => {});
  
      
    };

  return (
    <div>
      <header>
        <div className="main_menu_iner">
          <div className="container">
            <div className="row align-items-center ">
              <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg navbar-light justify-content-between">
                  <a className="navbar-brand" href="index.html">
                    {" "}
                    <img src={img} alt="logo" />{" "}
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>

                  <div
                    className="collapse navbar-collapse main-menu-item justify-content-center"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        {/* <a className="nav-link" href="index.html">
                          Home
                        </a> */}
                        <Link className="nav-link" to='/'  >Home</Link>
                      </li>
                      <li className="nav-item">
                        {/* <a className="nav-link" href="about.html">
                          About
                        </a> */}
                           <Link className="nav-link" to='/about' >About</Link>
                      </li>
                      <li className="nav-item">
                        {/* <a className="nav-link" href="packages.html"> */}
                          
                        {/* </a> */}
                        <Link className="nav-link" to='/packages' >packages</Link>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          href="blog.html"
                          id="navbarDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Blog
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          {/* <a className="dropdown-item" href="blog.html">
                            Blog
                          </a> */}
                          
                          <Link className="dropdown-item" to='/blog' >Blog</Link>
                          {/* <a className="dropdown-item" href="single-blog.html">
                            Single blog
                          </a> */}
                          <Link className="dropdown-item" to='/blogdetail' >Single block</Link>
                        </div>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          href="blog.html"
                          id="navbarDropdown_1"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          pages
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown_1"
                        >
                          {/* <a className="dropdown-item" href="top_place.html">
                            top place
                          </a> */}
                          <Link className="dropdown-item" to='/topplace' >Top Place</Link>
                          {/* <a className="dropdown-item" href="tour_details.html">
                            tour details
                          </a> */}
                          <Link className="dropdown-item" to='/tourdetail' >Tour Detail</Link>
                          {/* <a className="dropdown-item" href="elements.html">
                            Elements
                          </a> */}
                        </div>
                      </li>
                      <li className="nav-item">
                        {/* <a className="nav-link" href="contact.html">
                          Contact
                        </a> */}

                     <Link className="nav-link" to='/contact' >contact</Link>
                      </li>
                      <li className="nav-item">
                        {/* <a className="nav-link" href="contact.html">
                          Contact
                        </a> */}

                     <Link className="nav-link" to='/Mytrips' >Mytrips</Link>
                      </li>
                    </ul>
                  </div>

                  <div>
                   <Button
                      className="btn_1 d-none d-lg-block button1"
                      variant="primary"
                    onClick={logOutData}
                    >
                      Logout
                    </Button>
                      
                    
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
     </div>
  );
}

export default HeaderLogout;
