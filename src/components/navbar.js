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
      <div style={{margin:"auto" ,display:"flex",alignItems:"center",height:"4rem"}}>
      <Link to="/" className="nav-brand" style={{fontSize:"3rem"}}> 
        ReactBooks
       </Link>
       <Link to="/" className="nav-link"> 
        About
       </Link>
       <Link to="/" className="nav-link"> 
        Books
       </Link>
      <Link to="/cart" className="nav-link" style={{fontSize:"2rem"}}>
      <FaCartArrowDown  />
      </Link>
        </div>     
    </nav>
  );
}

