import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";  

export const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                        {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/features">Features</Link>
                        {/* <a className="nav-link" href="#">Features</a> */}
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/pricing">Pricing</Link>
                        {/* <a className="nav-link" href="#">Pricing</a> */}
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
        </div>
    )
}
