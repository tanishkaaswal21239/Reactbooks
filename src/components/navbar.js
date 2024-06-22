import React from "react";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { FaCartArrowDown } from "react-icons/fa";
export const Navbar= (props)=>{
  const [showAlert, setShowAlert] = useState(false);

  const handleCartClick = () => {
    setShowAlert(true); 
  };

  return (
    <nav className="light-hue-bg navbar bg-body-tertiary container-fluid" style={{fontSize:"2rem"}}>
      <Link to="/" className="nav-link"> 
        React
       </Link>
      <Link to="/" className="nav-link">
        About
      </Link>
      <Link to="/" className="nav-link">
        Authors
      </Link>
      <Link to="/" className="nav-link">
        Books
      </Link>
      <Link to="/cart" className="nav-link" >
      <FaCartArrowDown  />
      </Link>
       <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form> 
     
    </nav>
  );
}

