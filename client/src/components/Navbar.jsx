import React from 'react';
import '../styles/Navbar.css';
import logo from '../img/Logo.png';


export default function Navbar({ currentPage, handlePageChange }) {
    return (

        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="logo">
                    <a className="navbar-brand" href="#home" onClick={() => handlePageChange("Home")}>
                        <img src={logo} width='200' height='100' alt="logo"></img>
                    </a>
                </div>

                <div className="collapse navbar-collapse links" id="navbarNav">
                    <ul className="navbar-nav">

                        <li className="nav-item">
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#signup" onClick={() => handlePageChange("SignUp")}>Sign Up</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#login" onClick={() => handlePageChange("Login")}>Log in</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#profile" onClick={() => handlePageChange("Profile")}>Profile</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}