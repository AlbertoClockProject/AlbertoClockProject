import React from "react";
import "./App.css";
import image10 from './assets/image10.png';

const Aboutus = () => {
    return (
        <div className="container my-4" id="aboutus-link">
            {/* Heading Section */}
            <div className="text-center mb-4">
                <h1 className="display-5 fw-bold">About Alberto Clocks</h1>
                <p className="text-muted fs-5">
                    Timeless craftsmanship, modern innovation.
                </p>
            </div>

            {/* About Content */}
            <div className="row align-items-center">
                {/* Left Column - Image */}
                <div className="col-lg-5 mb-4 mb-lg-0">
                    <img
                        src={image10}
                        alt="About Alberto Clocks"
                        className="img-fluid rounded"
                    />
                </div>

                {/* Right Column - Text */}
                <div className="col-lg-6">
                    <h3 className="fw-bold">Our Story</h3>
                    <p className="text-muted">
                        Founded in 1999, Alberto Clocks is a blend of tradition
                        and innovation. From vintage designs to modern smart
                        clocks, we are committed to crafting timepieces that
                        inspire elegance and functionality in every moment.
                    </p>
                    <h5 className="fw-bold mt-4">Our Mission</h5>
                    <p className="text-muted">
                        To create clocks that not only tell time but also add a
                        timeless charm to your spaces.
                    </p>
                </div>
            </div>

            {/* Statistics Section */}
            <div className="row text-center mt-3">
                <div className="col-md-3">
                    <h2 className="text-primary fw-bold">10K+</h2>
                    <p className="text-muted">Happy Customers</p>
                </div>
                <div className="col-md-4">
                    <h2 className="text-primary fw-bold">50+</h2>
                    <p className="text-muted">Unique Designs</p>
                </div>
                <div className="col-md-4">
                    <h2 className="text-primary fw-bold">100%</h2>
                    <p className="text-muted">Satisfaction Guaranteed</p>
                </div>
            </div>
        </div>
    );
};

export default Aboutus;
