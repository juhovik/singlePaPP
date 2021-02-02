import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">SPA Example</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/about">About</Link>
      </li>
      <li className="nav-item dropdown">
      <Link className="nav-link" to="/contactus">Contact us</Link>
      </li>
    </ul>
  </div>
</nav>
    )
}