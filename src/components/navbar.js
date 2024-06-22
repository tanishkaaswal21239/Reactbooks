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
    <nav className="light-hue-bg navbar bg-body-tertiary container-fluid" >
      <div style={{margin:"auto",display:"flex",alignItems:"center",height:"6rem"}}>
      <Link to="/" className="nav-brand" style={{fontSize:"4rem"}}> 
        ReactBooks
       </Link>
      <Link to="/cart" className="nav-link" style={{fontSize:"4rem"}}>
      <FaCartArrowDown  />
      </Link>
        </div>     
    </nav>
  );
}

