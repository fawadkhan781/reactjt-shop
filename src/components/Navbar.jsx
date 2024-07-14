import React from 'react'
import { Link } from 'react-router-dom'
export const Navbar = () => (
    <nav> 
        <ul className="nav">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/shop">Shop</Link></li>
          <li className="nav-item"><Link className="nav-link" to="contact">Contact</Link></li>
        </ul>
      </nav>
)
