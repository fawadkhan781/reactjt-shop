import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-light py-4">
    <div className="container">
      <div className="row">
        {/* Quick Menu */}
        <div className="col-md-4">
          <h5>Quick Menu</h5>
          <ul className="list-unstyled">
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        {/* Address */}
        <div className="col-md-4">
          <h5>Address</h5>
          <p>123 Street Name<br />City, Country<br />Zip Code</p>
        </div>
        {/* Logo */}
        <div className="col-md-4">
          <h5>MyShop</h5>
          <p>Your one-stop shop for everything!</p>
        </div>
      </div>
    </div>
  </footer>
  )
}
