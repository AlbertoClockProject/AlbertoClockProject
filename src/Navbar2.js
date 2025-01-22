import React, { useState } from 'react';
import './App.css';
import logo1 from './assets/logo1.png'; // Import logo image

function Navbar2() {
    const [showAlert, setShowAlert] = useState(false);
    const [showAlert2, setShowAlert2] = useState(false);

    // Function to handle Cart click
    function handleCartClick(e) {
        e.preventDefault();
        setShowAlert(true);

        // Automatically hide the alert after 3 seconds
        setTimeout(() => {
            setShowAlert(false);
        }, 3000);
    }

    // Function to handle Login click
    function handleLoginClick(e) {
        e.preventDefault();
        setShowAlert2(true);

        // Automatically hide the alert after 3 seconds
        setTimeout(() => {
            setShowAlert2(false);
        }, 3000);
    }

    // Function to manually close the alerts
    function closeAlert() {
        setShowAlert(false);
    }

    function closeAlert2() {
        setShowAlert2(false);
    }

    return (
        <>
            <nav className="navbar nav-underline navbar-expand-lg bg-body-white">
                <div className="container-fluid">
                    {/* Logo Section */}
                    <a className="navbar-brand d-flex align-items-center" href="#">
                        <img src={logo1} alt="Logo2" className="logo-image me-2" />
                    </a>

                    {/* Navbar Toggler for Small Screens */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Collapsible Section */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        const target = document.getElementById("contactus-link");
                                        const offsetTop = target.getBoundingClientRect().top + window.scrollY - 130; // Adjust offset as needed
                                        window.scrollTo({ top: offsetTop, behavior: "smooth" });
                                    }}
                                >
                                    Contact Us
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="#"
                                    onClick={handleLoginClick}
                                >
                                    Account
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="#"
                                    onClick={handleCartClick}
                                >
                                    Cart
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Alert Message for Cart */}
            {showAlert && (
                <div
                    className="alert bg-light alert-dismissible fade show text-center mt-3 mx-auto"
                    role="alert"
                    style={{ maxWidth: "500px" }}
                >
                    🛒 Your cart is empty! Start adding items to see them here.
                    <button
                        type="button"
                        className="btn-close"
                        onClick={closeAlert}
                    ></button>
                </div>
            )}

            {/* Alert Message for Login */}
            {showAlert2 && (
                <div
                    className="alert bg-light alert-dismissible fade show text-center mt-3 mx-auto"
                    role="alert"
                    style={{ maxWidth: "500px" }}
                >
                    🔐 Please log in to access your account.
                    <button
                        type="button"
                        className="btn-close"
                        onClick={closeAlert2}
                    ></button>
                </div>
            )}
        </>
    );
}

export default Navbar2;
