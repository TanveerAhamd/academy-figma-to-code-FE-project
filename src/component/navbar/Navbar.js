import React from 'react'
import './Navbar.css';
import Logo from '../../assets/images/Group 16.png'
import Profile from '../../assets/images/IMG_03999 1.png'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container px-lg-0 px-xl-2">
                    <a class="navbar-brand" href="/">
                        <img src={Logo} alt="Logo" class="img-fluid d-inline-block align-text-top" />
                    </a>
                    <button className="navbar-toggler border-color" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                   
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#9e5cf2" class="bi bi-list" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                            </svg>
                       
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <button className="nav-link dropdown btn btn-link fw-medium  custom-font" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categories
                                    <i className="bi bi-chevron-down ms-1 fw-medium  custom-font"></i>
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/action">Action</a></li>
                                    <li><a className="dropdown-item" href="/another-action">Another action</a></li>
                                    <li><a className="dropdown-item" href="/something-else">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-medium  custom-font custom-font" href="/link">Teach</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-medium  custom-font" href="/link">Cntact us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-medium  custom-font" href="/link">About us</a>
                            </li>

                        </ul>
                        {/* Search */}
                        <div class="search-container me-lg-0 me-xl-3">
                            <i class="bi bi-search"></i>
                            <input class="form-control custom-felid" type="search" placeholder="Search anything" aria-label="Search" />
                        </div>
                        <div class="line d-xl-block text-secondary d-none"></div>
                        {/* Avatar  */}
                        <div class="Profile dropdown mx-3">
                            <a href="#" class="text-decoration-none d-flex align-items-center my-2"
                                type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src={Profile} class="rounded" height="40" alt="Azhar Shehzadd's Avatar" loading="lazy" />
                                <div class="ms-2 custom-font-family">
                                    <span class="fw-medium text-dark">Behzad Pashaei</span>
                                    <br></br>
                                    <small class="text-secondary">ui & ux designer</small>
                                </div>
                            </a>
                            <ul class="dropdown-menu ">
                                <li><a class="dropdown-item" href="#">My Profile</a></li>
                                <li><a class="dropdown-item" href="#">Manage Your Account</a></li>
                                <li><a class="dropdown-item" href="#">Log Out</a></li>
                            </ul>
                        </div>
                        {/* Notifications  */}
                        <div class="dropdown">
                            <a class="d-flex align-items-center justify-content-center notification-height rounded" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgba(158, 92, 242, 1)" class="bi bi-bell-fill" viewBox="0 0 16 16">
                                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
                                </svg>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-end" >
                                <li>
                                    <a class="dropdown-item" href="#">Some news</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#">Another news</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
