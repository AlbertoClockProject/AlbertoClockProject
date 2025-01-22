import React from 'react';
import './App.css';

function NavbarWithIcons() {
    return (
        <nav className="navbar navbar-custom sticky-top sticky-second">
            <div className="container-fluid d-flex align-items-center justify-content-between">
                {/* Left Section: Grouped Buttons */}
                <div className="btn-group navbar-btn-group">
                    <button className="btn btn-icon">
                        <i className="bi bi-grid-3x3-gap-fill"></i>
                    </button>
                    <button className="btn btn-icon">
                        <i className="bi bi-grid-fill"></i>
                    </button>
                </div>

                <div className="navbar-brand">
                    <h2>Alberto Clocks</h2>
                </div>

                {/* Right Section: Category Dropdown */}
                <div className="dropdown">
                    <button
                        className="btn btn-dropdown dropdown-toggle"
                        type="button"
                        id="categoryDropdown"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Dropdown <i className="bi"></i>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="categoryDropdown">
                        <li><a className="dropdown-item" href="#">Settings</a></li>
                        <li><a className="dropdown-item" href="#">Report</a></li>
                        <li><a className="dropdown-item" href="#">Help</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavbarWithIcons;
