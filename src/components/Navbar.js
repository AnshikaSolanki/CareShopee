import React from "react";

export default function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">CareShopee</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a className="nav-link" role="button" data-bs-toggle="dropdown" aria-expanded="false" href="#">Shop</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Hair Care</a></li>
                  <li><a className="dropdown-item" href="#">Skin Care</a></li>
                  <li><a className="dropdown-item" href="#">Body Care</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="#">Explore New More</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link" href="#" role="button" data-bs-toggle='dropdown' aria-expanded='false'>SkinCare</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Facewash</a></li>
                  <li><a className="dropdown-item" href="#">Moisturizers</a></li>
                  <li><a className="dropdown-item" href="#">Face Serums</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="#">Explore More</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  HairCare
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Shampoo</a></li>
                  <li><a className="dropdown-item" href="#">Conditioners</a></li>
                  <li><a className="dropdown-item" href="#">Serums</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="#">Explore More</a></li>
                </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link">Build Your Routine</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Track Order</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-dark" type="submit">Search</button>
          </form>
        </div>
        </div>
      </nav>        
    )
};