import React, { useState } from 'react';
import HeaderCartButton from './cartnav';

const Navbar= (props)=>{
  const [showAlert, setShowAlert] = useState(false);

  const handleCartClick = () => {
    setShowAlert(true); 
  };

  return (
    <nav className="light-hue-bg navbar bg-body-tertiary container-fluid">
      <a href="/" className="navbar-brand">
        ReactBooks
      </a>
      <a href="/" className="nav-link">
        About
      </a>
      <a href="/" className="nav-link">
        Authors
      </a>
      <a href="/" className="nav-link">
        Books
      </a>
      <a href="/" className="nav-link">
        ReactMerch
      </a>
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
     <HeaderCartButton onClick={props.onShowCart}/>
    </nav>
  );
}
export default Navbar;
