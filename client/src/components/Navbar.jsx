import React from 'react';
import '../styles/Navbar.css';
import logo from '../img/Logo.png';


export default function Navbar({ currentPage, handlePageChange }) {
    return (

        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="logo">
                    <a class="navbar-brand" href="#home" onClick={() => handlePageChange("Home")}>
                        <img src={logo} width='200' height='100' alt="logo"></img>
                    </a>
                </div>

                <div class="collapse navbar-collapse links" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#signup" onClick={() => handlePageChange("SignUp")}>Sign Up</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#login" onClick={() => handlePageChange("Login")}>Log in</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#profile" onClick={() => handlePageChange("Profile")}>Profile</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}