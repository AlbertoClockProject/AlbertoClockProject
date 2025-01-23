import React from 'react';
import './App.css';

function Navbar3() {
    return (
        <nav className="navbar bg-body-white">
            <div className="container-fluid">
                <ul className="nav nav-underline justify-content-evenly w-100 w-md-50 w-lg-25 d-flex">
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                const target = document.getElementById("luxury-link");
                                const offsetTop = target.getBoundingClientRect().top + window.scrollY - 150; // Adjust offset as needed
                                window.scrollTo({ top: offsetTop, behavior: "smooth" });
                            }}
                        >
                            Luxury Clocks
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                const target = document.getElementById("vintage-link");
                                const offsetTop = target.getBoundingClientRect().top + window.scrollY - 130; // Adjust offset as needed
                                window.scrollTo({ top: offsetTop, behavior: "smooth" });
                            }}
                        >
                            Vintage Clocks
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                const target = document.getElementById("smart-link");
                                const offsetTop = target.getBoundingClientRect().top + window.scrollY - 170; // Adjust offset as needed
                                window.scrollTo({ top: offsetTop, behavior: "smooth" });
                            }}
                        >
                            Smart Clocks
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                const target = document.getElementById("sale-link");
                                const offsetTop = target.getBoundingClientRect().top + window.scrollY - 140; // Adjust offset as needed
                                window.scrollTo({ top: offsetTop, behavior: "smooth" });
                            }}
                        >
                            Sale
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                const target = document.getElementById("gift-link");
                                const offsetTop = target.getBoundingClientRect().top + window.scrollY - 150; // Adjust offset as needed
                                window.scrollTo({ top: offsetTop, behavior: "smooth" });
                            }}
                        >
                            Gift
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                const target = document.getElementById("aboutus-link");
                                const offsetTop = target.getBoundingClientRect().top + window.scrollY - 130; // Adjust offset as needed
                                window.scrollTo({ top: offsetTop, behavior: "smooth" });
                            }}
                        >
                            About Us
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar3;
