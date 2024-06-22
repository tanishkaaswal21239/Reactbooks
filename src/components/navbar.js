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
    <nav className="light-hue-bg navbar bg-body-tertiary container-fluid" style={{fontSize:"5rem"}}>
      <Link to="/" className="nav-brand"> 
        ReactBooks
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
     
    </nav>
  );
}

